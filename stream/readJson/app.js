let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
  //  一次请求是  /  一次是favicon.ico
  if(req.url !== '/favicon.ico'){
    console.log('客户端想服务器发起请求:',req.url);
    res.writeHead(200,{"Content-type":"application/json"});
    let myReadStream = fs.createReadStream(__dirname + '/person.json','utf8');
    myReadStream.pipe(res);
  }

});

server.listen(8787,"127.0.0.1");
console.log('server is running...');
