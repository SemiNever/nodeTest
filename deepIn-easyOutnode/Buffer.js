// var str = "hello";
// var buf =new Buffer(str);
// buf[2]=65;
// console.log(buf.toString('utf-8'));
// var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
// bin[0]; 
// var buf  = new Buffer(100); 
// // console.log(buf.length);
// buf[10]=3.14;
// console.log(buf[10]);
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var sub = bin.slice(2);

sub[0] = 0x65;
console.log(bin); // => <Buffer 68 65 65 6c 6f>