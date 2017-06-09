const path = require('path');

//路径的标准化
// 标准化之后的路径里的斜杠在Windows系统下是\，而在*nix系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用.replace(/\\/g, '/')再替换一下标准路径。
var cache ={};

function store(key,value){
	cache[path.normalize(key)]=value;

}

store('foo/bar',1);
store('foo//baz//../bar',2);
console.log(cache);

//path.join 多个路径拼接成标准路径

console.log(path.join('foo','baz/','../bar'));

//path.extname(path) 返回path的拓展名

console.log(path.extname('foo/bar.js'));

