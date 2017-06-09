var fs =require('fs');

 function copy(src,dst){
 	// fs.writeFileSync(dst,fs.readFileSync(src));
 	//1.一次性读取，然后写入磁盘，并不适合拷贝大文件
 	
      fs.createReadStream(src).pipe(fs.createWriteStream(dst));
     // 2.复制大文件的修改,创建只读数据流和只写数据流，用pipe方法把数据流进行连接
       //可以形象的比喻成式水管的流动
 }

 function main (argv){
 	copy(argv[0],argv[1]);

 }
console.log(process.argv);
//process是一个全局变量，可以通过process。argv获得命令行参数
// argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径

 // main(process.argv);