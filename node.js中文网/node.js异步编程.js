// 例子1js是单线程的，不存在异步执行
// function heavyCompute(n,callback){
// 	var count=0,
// 	i,j;
// 	for(i=n;i>0;--i){
// 		for(j=n;j>0;--j)
//             {
//             	count+=1;
//             }
// 	}
//     callback(count);


// }

// heavyCompute(10000,function(count){
// 	console.log(count);

// });


// 例子二，回调函数后于后续代码，
// 但是在JS再回到主线程时，即使满足的延迟执行的时间，
// 回调函数也是要等到JS主线程空闲时才能开始执行。
// setTimeout(function(){
// 	console.log('world');
// },1000);

// console.log('hello ');

// 例子三

function heavyCompute(n){
	var count =0,
	i,j;
	for(i=n;i>0;--i){
		for(j=n;j>0;--j){
               count+=1;
		}

	}
}
var t = new Date();

setTimeout(function(){
	console.log(new Date()-t);
	//打印台输出 3000+，证明3秒之后才执行的上面这条语句
}, 1000);
heavyCompute(50000);

