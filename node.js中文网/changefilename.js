// 引入fs文件处理模块
var fs =require('fs');
// 用变量表示文件夹的名称，方便之后使用
var src = 'icons';
//遍历文件的Api,fs.readdir(path,callback);
// 读取文件path路径的所在目录内容，回调函数（callback）接受两个参数
// （err，files）其中files 是一个在存储目录中包含文件名称的数组

fs.readdir(src,function(err,files){
	// files是名称数组，因此可以使用foreach遍历
	files.forEach(function(filename){
		// 重命文件的Api fs.rename(oldPath,newPath,callback)
		  var oldPath = src + '/' + filename, newPath = src + '/' + filename.replace(/_/g, '-');
        fs.rename(oldPath, newPath, function(err) {
            if (!err) {
                console.log(filename + '下划线替换成功!'+ '替换结果为'+newPath);
            }       
        })

	})
})
