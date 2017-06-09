var EventEmitter =require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);

function fn1(item){
	console.log("事件1触发第1次，参数是"+item);
}
life.on('event1',fn1)
life.on('event1',function(item){
	console.log("事件1触发第2次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第3次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第4次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第5次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第6次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第7次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第8次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第9次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第10次，参数是"+item);
})
life.on('event1',function(item){
	console.log("事件1触发第11次，参数是"+item);
})  

// 11次以上会弹出警告，官方建议不要超过10个监听器，可以对此值做一定修改（第三行）；

life.on('event2',function(item){
	console.log("事件2触发第1次，参数是"+item);
})  
life.on('event2',function(item){
	console.log("事件2触发第2次，参数是"+item);
})  

life.removeListener("event1", fn1);//移除监听事件，第二个参数只能写函数名，不能写具体函数
console.log(life.listeners('event1').length);
// life.removeAllListeners();//无参数会把life的所有监听事件去除
life.removeAllListeners('event1');//只去除event1监听事件
// life.emit('event1','x1');
// life.emit('event2','x2');

var hasListener1 =life.emit('event1','x1');
var hasListener2 =life.emit('event2','x2');
var hasListener3 =life.emit('event3','x3');


console.log(hasListener1); //true
console.log(hasListener2); //ture
console.log(hasListener3); //false



