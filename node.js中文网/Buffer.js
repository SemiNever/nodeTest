// var bin = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6c]);

// console.log(bin[1]);

// var str = bin.toString('utf-8');

// console.log(str);

// var bin =new Buffer('hello','utf-8');

// console.log(bin);

// Buffer 将JS的数据处理能力从字符串拓展到了任意二进制数据

var bin =new Buffer([ 0x48, 0x65, 0x6c, 0x6c, 0x6c ]);

var dup =new Buffer(bin.length);

bin.copy(dup);

// dup[0] =0x68;

console.log(bin);
console.log(dup);