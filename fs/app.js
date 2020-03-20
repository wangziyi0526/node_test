// 文件系统

// 1. 引入文件系统模块
let fs = require('fs');

// 2.通过对象调用方法

fs.writeFileSync('./text1.txt',"日拱一卒,功不唐捐")  // 同步写入数据
let text = fs.readFileSync('./text1.txt','utf8');  // 同步读取数据
// console.log(text);



fs.readFile('text.txt','utf8',function(err,data){  // 异步读取数据   
  if(err) throw err; // 如果有异常 抛出异常
  console.log(data); // 读取到的数据
  fs.writeFile('text2.txt',data);  // 异步写入文件

})

