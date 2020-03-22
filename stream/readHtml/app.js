let http = require('http');
let fs = require('fs');

// 搭建服务器
let server= http.createServer(function(req,res){
  if(req.url !== '/favicon.ico'){
    console.log('客户端想服务器发起请求:',req.url);
    res.writeHead(200,{"Content-type":"text/html"});
    let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
  }
})

server.listen(8000,"127.0.0.1");
console.log("Server is running ...");