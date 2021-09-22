# Node 之 Buffer

## Buffer

- Buffer 是 Node 特有(区别于浏览器 JavaScript) 的数据类型, 主要用来处理二进制数据, 在前端 JavaScript 中, 和二进制数据打交道的机会比较少 (ES2015 增加了 ArrayBuffer 类型, 用来操作二进制数据流, Node 也可以使用该类型)。而 Node 在进行 Web 开发时经常需要和前端惊醒数据通信, 二进制数据流十分常见(例如传输一张 gif 图片), 因此 Node 除了 String 外, 还内置了 Buffer 这一数据类型, 它是 Node 作为运行时对 JavaScript 做的扩展。

- Buffer 属于固有类型, 因此无须使用 ruquire 进行引入。
- 在文件操作和网络操作中, 如果不显式声明编码格式, 其返回数据的默认类型就是 Buffer。例如下面读取文件的例子, 如果不指定编码格式, 得到的结果就是 Buffer 字符串。

```
var fs = require("fs");
fs.readFile("test.txt", function (err,results) {
  console.log(results);
  // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> (Hello Node)
})
```

- 上面的代码中, 最后打印出的是十六进制的数据, 由于纯二进制格式太长而且难以阅读, Buffer 通常表现为十六进制的字符串。

## Buffer 的构建与转换

- 可以使用 Buffer 类数值解初始化一个 Buffer 对象, 参数可以是由 二进制数据组成的数组。

```
var buffer = new Buffer([0*48,......]);
// Hello world
```

- 如果想由字符串来得到一个 Buffer, 同样可以调用构造函数来实现, 例如:

```
var buffer = new Buffer ("Hello world");
console.log(buffer); // <Buffer 48 65 ...>
```

- 注意: 在最新的 Node API 中, Buffer()方法被标记为 Deprecated, 表示已经不推荐使用, 因为这个方法在某些情况下可能不安全, 并且会在将来的版本中将其移除。
- 目前推荐的是使用 Buffer.from 方法来初始化一个 Buffer 对象,上面的代码可以改写为如下形式

```
var buffer = Buffer.from([0*48,......]);
// "Hello World"

var buffer = Buffer.from("Hello World);
console.log(buffer);// <Buffer 48 65 6c .....>
```

- 如果想把一个 Buffer 对象转成字符串格式, 需要使用 toString 方法, 调用格式为:

```
buffer.toString([encoding], [start], [end]);
// encoding 目标编码格式
// start 开始位置
// end 结束位置
```

- Buffer 支持的编码类型种类有限, 只有以下 6 种:

1. ASCII
2. Base64
3. Binary
4. Hex
5. Utf-8
6. Utf-16LE / UCS-2

- 不过也已经覆盖了最常用的编码类型。Buffer 还提供了 isEncoding 方法来判断是否支持转换为目标编码格式.
- 例如, 如果我们想把上面表示 [Hello World] 的 Buffer 对象转换为字符串, 那么可以调用:

```
// 只转换前5个字符, 输出"Hello"
console.log(buffer.toString("utf-8",0,5));
```

- 如果 toString 在调用时不包含任何参数, 那么就会默认采用 UTF-8 编码, 并转换整个 Buffer 对象

## Buffer 的拼接

- Buffer 一个常见的使用场景是用来处理 http 的 post 请求, 随便在网络上搜索, 都能看到类似如下的代码

```
var body = '';
req.setEncoding("utf-8");
req.on('data', function (chunk){
  body += chunk;
})
req.on('end', function () {

})
```

- 上面的代码使用 += 来拼接上传的数据流, 这个过程包含了一个隐式的编码转换。
- body +=chunk 相当于 body += chunk.toString(), 当上传字符串全都是英文的时候固然没关系, 但如果字符串中包含中文或者其他语言, 由于 toString 方法默认使用 utf-8 编码, 这时就有可能出现乱码,
