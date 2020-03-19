//引入 stuff1.js模块 此时stuff1模块中只有一个方法 counter
let counter = require('./module&&require/stuff1');
console.log(counter(['1','2','3']))
// 此时在stuff.模块中只有 一个方法 counter 
// 并且在app.js中 用require引入, 并赋值给一个变量接受
// 那么stuff模块中的 counter方法就可以在app.js中使用了

/////////////////////////////////////////
// 引入的 stuff.js模块  此时stuff模块中有多个属性(方法)
let exportStuffData = require('./module&&require/stuff')
console.log(exportStuffData.name())
console.log(exportStuffData.counter([1,2,3,4,5,6,7]))
console.log(exportStuffData.adder(8,24))