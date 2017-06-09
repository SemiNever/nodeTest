const spawn =require('child_process').spawn;
const bat =spawn('cmd.exe',['c','my.bat']);

bat.stdout.on('data',(data)=>{
	console.log(data.toString());
});
bat.stderr.on('data',(data)=>{
	console.log(data.toString());
});
bat.on('exit',(code)=>{
	console.log(`子进程退出码：${code}`);
});
