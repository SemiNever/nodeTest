// 异步编程的异常处理.js
// node在处理异常上形成了一种约定，将异
// 常作为回调函数的第一个实参传回，如果为空值，则表明异步调用没有异常抛出


var async =function(callback){
	process.nextTick(function(){
		if(error){
			return callback(error);
		}
		callback(null,results);
	});
}
async(function(){
	console.log(err);
});