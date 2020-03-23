### 开始学习nodejs
### 日拱一卒无有尽,功不唐捐终入海
#### modle&& require

- nodejs模块化开发,以及文件引入等
> 当开发某一模块的时候,把相关逻辑代码放在一个文件或者同一文件夹下 并在最后使用module.exports 使该模块的方法对外界暴露,在其他文件地方中是用的时候采用require 进行引入使用即可

#### events (事件模块)
1. 大多数Node.js核心API都是采用管用的异步事件驱动架构(fs/http);
2. 所有能触发事件的对象都是EventEmitter 类的实例;
3. 事件流程: 引入模块 ---> 创建EventsEmitter对象 --->注册事件---> 触发事件

#### fs.readFile && fs.writeFile (文件系统)
1. 读取文件(fs.readFile);  app.js
2. 写入文件(fs.writeFile); app.js
3. 创建文件夹(fs.mkdir);    index.js
4. 删除文件夹(fs.rmdir);    index.js
5. 删除文件(fs.unlink);     index.js
6. 流程: 引入fs模块 ---> 调用方法 ---> 异常捕获;

#### 服务器

服务器和客户端的关系

client ---request---> server  客户端向浏览器发起请求
server ---response---> client 服务器返回给客户端响应数据


#### stream 流

读写流，并且通过搭建的本地服务器返回给客户端
包含(.txt/.html/.json)格式等

#### node-route 路由模块

通过访问的路径不同返回不同的数据
详情见/node_route

#### express 框架

1.基于Node.js平台，快速、开放、极简的web框架。

2.nodemon 
> 在开发环境下，往往需要一个工具来自动重启项目工程，我们可以借助nodemon开代替node进行启动