let http = require('http');

let fs = require('fs');

// 读取文件流
let myReadStream = fs.createReadStream('./stream/text.txt','utf8');

// 写入文件流
var myWriteStream = fs.createWriteStream('./stream/a.txt');

myReadStream.pipe(myWriteStream);

// 搭建服务器
let server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/plain"})
  let myReadStream = fs.createReadStream('./stream/text.txt','utf8');
  myReadStream.pipe(res);
})

server.listen(8000,'127.0.0.1');
console.log('server is running...');