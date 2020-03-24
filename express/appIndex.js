let express = require('express');

let app = express();

app.set('view engine','ejs');// 视图引擎 view engine 

// 根据用户请求的地址  返回对应的数据信息
app.get('/',function(req,res){
  console.log(req.url);
  res.sendFile(__dirname+'/app.html');
});
app.get('/contact',function(req,res){
  console.log(req.url);
  res.sendFile(__dirname+'/aboutMe.html');
});

// 路由参数   
app.get('/profile/:id',function(req,res){
  // res.sendFile('您所访问的路径参数为 : '+ req.params.id); // 拿到 这个输入的路由参数
  let data = [{name:'wangziyi',age:28},{name:"kobe Bryant",age:41}];
  res.render('profile',{title:'This is Ejs page!',name:'wangziyi',data:data});
})

app.listen(8818)
console.log('Server is running...')