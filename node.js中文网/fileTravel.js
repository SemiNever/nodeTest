//nodejs文件递归遍历的算法，同步遍历
const fs=require('fs');
const path =require('path');
function travel(dir,callback){
	fs.readdirSync(dir).forEach(function (file){
		var pathname =path.join(dir,file);
		if(fs.statSync(pathname).isDirectory()){
              travel(pathname,callback);
		}else{
			callback(pathname);
		}
	})
}
travel('C:/Users/asus/Desktop/FEtestdemo/node.js/node.js中文网',function(pathname){

	console.log(pathname);
});