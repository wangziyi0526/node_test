# Node 中Module的require

- CommonJs

> CommonJs 将每个文件都看做一个模块, 模块内部定义的变量都是私有的, 无法被其他模块使用,除非使用预定义的方法将内部的变量暴露出来(通过 export 和 require 关键字来实现), CommonJs 最为出名的实现就是 Node.js.
> CommonJs 一个显著的特点就是模块的加载是同步的,就目前来说, 受限于宽带速度, 并不适用于浏览器中的 JavaScript.

- AMD

> AMD 是 Asynchronous Module Definition 的缩写, 意思就是[ 异步模块定义 ]. 它采用异步方式加载模块, 模块的加载不影响它后面语句的运行。依赖这个模块的代码定义在一个回调函数中, 等到加载完成后, 这个回调函数才会运行。目前在前端流行的 RequireJs 就是 AMD 规范的一种实现

## require 及其运行机制

- 我们已经提到了 Node 遵循 CommonJs 来规范, 也就是使用 require 关键字来加载模块, 下面是一个简单的例子：
  > 定义一个简单的模块

```
// person.js
var person = {
  talk: function () {
    console.log("I am talking...");
  },
  listren: funciton () {
    console.log("I am listrening...");
  }
  // More Function ...
}
module.exports = person;
```

> 这样就实现了一个自定义模块, 该模块提供了一个接口, 然后使用 module.exports 将该接口暴露给外部使用, 外部的代码想要使用 person.js 中的方法, 需要使用 require 关键字引入该接口。

```
// index.js
var person = require("./person.js");
person.talk();
```

** 注意:** 在引入自定义模块是省略相对路径 [./] 会导致错误。

## require 的缓存策略

- Node 会自动缓存经过 **require** 引入的文件, 使得下次再引入不需要经过文件系统而是直接从缓存中读取。 这种缓存是基于文件路径定位的, 这表示即使有有两个完全相同的文件，但他们位于不同的路径下，也会在缓存中维持两份。

## require 的隐患

- 当调用 **require** 加载一个模块时, 模块内部的代码都会被调用, 有时候这可能会带来隐藏的 bug.例如下面的例子：

```
// module.js
function test () {
  setInterval(function () {
    console.log("test");
  },1000)
}
test();

module.exports = test;

// run.js
var test = require("./module.js");
```

- run.js 除了加载一个模块之外没有进行任何操作, 试着运行一下会发现每隔一秒输出 test 字符串, 同时 run.js 进程不会退出。
- 加载一个模块相当于指向模块内部的代码, 在 module.js 中由于设置了一个不间断的定时器, 导致 run.js 也会一直运行下去。
- 上面是一个极端的例子, 摄像一种情景, 当你调用某个别人已经编写完成的模块时, 明明所有的调用都已经结束, 但调用者进程无论如何都不会退出, 这很可能是被调用的模块内部有一个隐蔽的循环或者一个一直打开的数据库连接, 这个问题在开发过程中可能不会被注意到或者不会被触发,如果真正到了生产环境,
  这种情况可能导致严重的内存泄漏。

## 模块化与作用域

- 既然 已经提到了模块化, 我们就来谈谈作用域的问题, 主要关注点在 this 上
- Node 和 JavaScript 中的 this 指向有一些区别, 其中 Node 控制台和脚本文件的策略也不一样。对于浏览器中的 JavaScript 来说, 无论是在脚本或者是 Chorme 控制台中, 其 this 的指向和行为都是一致的; 而 Node 则不是这样

1. 控制台中的 this
   首先是全局的 this, 分别在 Node Repl 和 Chrome 控制台中运行：

```
console.log(this);
// Chrome 输出 window

// Node 输出 global对象
```

可以看出, 在 Node Repl 环境中, 全局的 this 指向 global 对象。 继续运行下面的代码：

```
var a = 10;
console.log(this.a);
// Chrome 输出10;
// Node Repl 输出10
```

在 Node 控制台中, 全局变量会被挂载到 global 下。

2. 脚本中的 this

我们新建一个名为 test.js 的文件, 在文件中添加如下代码:

```
console.log(this);
```

运行 node test.js, 打印出的结果是一个空对象。
然后是下面的代码:

```
var a = 10;
console.log(this.a); // undefined
console.log(global.a); // undefined
```

仍然全都是 undefined, 说明第一行代码定义的变量 a 并没有挂载在全局的 this 或者 global 对象。
然而如果声明变量时 不使用 var 或者 let 关键字, 例如下面的代码:

```
a = 10;
console.log(global.a); // 10
```

却可以正常打印出结果。
那么在 Node 脚本文件中定义的全局 this 又指向了什么呢? 答案也是 module.exports。

```
this.a = 10;
console.log(module.exports);// 10
```

- 总结一下, 在 Node repl 环境中控制台的全局 this 和 global 可以看作是同一对象, 而在脚本文件中, 二者并不等价。

## Node 中的作用域种类

1. 全局作用域

- 如果一个变量没有用 var、let、或者 const 之类的关键字修饰, 那么它就是属于全局作用域, 定义在全局作用域上的变量可以通过 global 对象访问到。
  例如前面的例子：

```
a = 10l
console.log(global.a); // 10
```

2. 模块作用域

- 在代码文件顶层 (不在任何方法、对象中) 使用 var、let 或者 const 修饰的变量都位于模块作用域中,不同模块作用域之间的作用域是隔离的。

- 模块作用域职工的 this 指向 module。exports 中, 例如前面提到的：

```
this.a = 10;
console.log(module.exports); // 10

```
