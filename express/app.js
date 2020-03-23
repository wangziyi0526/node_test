var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  if(req.url !== "/favicon.ico"){
    if(req.url === '/' ||  req.url === "/index"){
      console.log('index')
      res.writeHead(200,{"Content-type":"text/html"});
      fs.createReadStream(__dirname+"/index.html").pipe(res);
    }else if(req.url === '/home'){
      console.log('home')
      res.writeHead(200,{"Content-type":"text/html"});
      fs.createReadStream(__dirname+"/home.html").pipe(res);
    }else if(req.url === '/aboutMe'){
      res.writeHead(200,{"Content-type":"text/html"});
      fs.createReadStream(__dirname+"/aboutMe.html").pipe(res);
    }
  }
})

server.listen(8000,'127.0.0.1');
console.log('Server is running...')