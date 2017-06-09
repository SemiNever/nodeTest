// 实现sleep(1000)的效果
// setInterval()和setTimeout()不能阻塞后续代码的执行

var start =new Date();
while(new Date()-start==1000){
   console.log('+1s');
}