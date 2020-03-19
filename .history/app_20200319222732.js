//引入 stuff.js模块
let counter = require('./module&&require/stuff');
console.log(counter(['1','2','3']))
// 此时在stuff.模块中只有 一个方法 counter 
// 并且在app.js中 用require引入, 并赋值给一个变量接受
// 那么stuff模块中的 counter方法就可以在app.js中使用了
/////////////////////////////////////////