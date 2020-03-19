### 开始学习nodejs

#### modle&& require

- nodejs模块化开发,以及文件引入等
> 当开发某一模块的时候,把相关逻辑代码放在一个文件或者同一文件夹下 并在最后使用module.exports 使该模块的方法对外界暴露,在其他文件地方中是用的时候采用require 进行引入使用即可

#### events (事件模块)
1. 大多数Node.js核心API都是采用管用的异步事件驱动架构(fs/http);
2. 所有能触发事件的对象都是EventEmitter 类的实例;
3. 事件流程: 引入模块 ---> 创建EventsEmitter对象 --->注册事件---> 触发事件
