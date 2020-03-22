let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
  if(req.url !== '/favicon.ico'){
    console.log(req.url);
    if(req.url === '/' || req.url ==='/home'){
      res.writeHead(200,{"Content-type":"text/html"});
      fs.createReadStream(__dirname + "/home.html").pipe(res);
    }else if(req.url === '/content'){
      res.writeHead(200,{"Content-type":"text/html"});
      fs.createReadStream(__dirname+'/content.html').pipe(res);
    }else if(req.url === '/aboutUs'){
      let json = [
        {
          "name":"wangziyi"
        },
        {
          "contact":"18510126271"
        },{
          "e-mail":"18510126271@163.com"
        }
      ];
      res.writeHead(200,{"Content-type":"application/json"});
      res.end(JSON.stringify(json))
    }

  }
})

server.listen(8888,'127.0.0.1');
console.log('server is running...');