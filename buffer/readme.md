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
