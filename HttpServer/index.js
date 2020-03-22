var a = {
  i:0,
  toString:function(){
    return ++a.i;
  }
}
// var a = new Proxy({},{
//   val:1,
//   get(){
//     return ()=> this.val++;
//   }
// });
if(a == 1&& a== 2&& a==3){
  console.log('成功!')
}