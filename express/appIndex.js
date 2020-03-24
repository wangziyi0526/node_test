let express = require('express');

let app = express();
// 根据用户请求的地址  返回对应的数据信息
app.get('/',function(req,res){
  console.log(req.url);
  res.send('This is home page!')
});
app.get('/contact',function(req,res){
  console.log(req.url);
  res.send("This is a contat page!")
});

// 路由参数   
app.get('/profile/:id',function(req,res){
  res.send('您所访问的路径参数为 : '+ req.params.id); // 拿到 这个输入的路由参数
})

app.listen(8818)
console.log('Server is running...')