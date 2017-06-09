var fs =require('fs');
var readStream =fs.createReadStream('1.wmv');
var n=0;
readStream
  .on('data',function(chunk){
  	n++;
  	console.log('data emits');
  	console.log(Buffer.isBuffer(chunk));
  	// console.log(chunk.toString('utf8'));
  	readStream.pause();
  	console.log('data pause'); 
     setTimeout(function(){
     	console.log('data pause');
     	readStream.resume();
     }, 30);
  })
  .on('readable',function(){
  	console.log('data readable');
  })
  .on('end',function(){
  	console.log(n);
  	console.log('data ends');
  })
  .on('close',function(){
  	console.log('data close');
  })