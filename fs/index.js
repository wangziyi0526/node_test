// 1. 引入文件系统模块

let fs = require('fs');

// 2.使用模块对象调用方法
// 删除文件的api
fs.unlink('text1.txt',function(err){
  if(err) throw err;
  console.log('文件删除成功!')
}); 

// 创建文件夹  同步 
fs.mkdirSync('name');  

// 删除文件夹 同步
fs.rmdirSync("name");

// 异步创建 
fs.mkdir('name',function(){
  fs.readFile('text.txt','utf8',function(err,data){
    if(err) throw err;
    fs.writeFile('./name/name.txt',data);
  })
});
// 异步删除文件夹
// 1. 先删除文件职工的文件 2.在删除外部文件夹
fs.unlink('./name/name.txt',function(){
  fs.rmdir('name',function(err){
    if(err) throw err;
    console.log('文件夹删除成功!')
  })
})
