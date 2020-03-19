//  事件模块

//  1.引入事件模块  (系统模块)
let e = require('events');

//  2.创建事件  创建EventEmitter对象
// 在上面引入的events模块中有一个EventEmitter事件对象,将这个事件对象实例化
let myEmitter = new e.EventEmitter();

// 3.注册事件
// 此步骤为开始注册事件利用 .on 方法 
// 第一个参数为注册的事件名称,
// 第二个参数为触发这个事件的回调函数
myEmitter.on('someEvent',function(msg){
  console.log(msg)
  // setImmediate 可以使这个回调函数异步执行
  setImmediate(() =>{
    console.log('异步执行:',msg)
  })
})

// 4.触发事件
// 两个参数
// 第一个参数为  触发的事件名称
// 第二个参数为  向执行的回调函数中传参
myEmitter.emit('someEvent','实现事件并传递此参数到注册事件的回调函数中');

console.log(1)
