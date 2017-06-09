// JS自身的异常捕获和处理机制  try catch，只能用于同步代码

// function sync(fn){
// 	return fn();
// }
// try{
// 	sync(null);
// 	// Do something
// }
// catch(err){
// 	console.log('Error: %s', err.message);
// }
// // 控制台显示————————Error: fn is not a function
// // 可以看到，异常会沿着代码执行路径一直冒泡，直到遇到第一个try语句时被捕获住。但由于异步函数会打断代码执行路径，异步函数执行过程中以及执行之后产生的异常冒泡到执行路径被打断的位置时，如果一直没有遇到try语句，就作为一个全局异常抛出。以下是一个例子。

// function async(fn,callback){
// 	// Code eceution path breaks here
// 	setTimeout(function(){
// 		callback(fn());
// 	},0);
// }
// try{
// 	async(null,function(data){
// 		//do something
// 	});
// }catch(err){
// 	console.log('Error: %s', err.message);

// }

// nodejs的异步API设计模式
function async(fn,callback){
	//Code execution path breaks here
	setTimeout(function(){
		try{
			callback(null,fn());
		}catch(err){
			callback(err);
					}
	},0);
}
async(null,function(err,data){
	if(err){
		console.log('Error: %s', err.message);
	}else{
		//Do something
	}
})

