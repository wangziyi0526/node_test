var person = {
  name:'kobe'
};

var proxy = new Proxy(person,{
  get: function(target,key){
    if(key in target){
      return '被改写了';
    }
  }
});
console.log(proxy.name)
