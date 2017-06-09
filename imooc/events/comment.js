var http = require("http");
var querystring = require("querystring");

var postData = querystring.stringify({
content:"hello node.js",
mid:8837
})

var options = {
hostname:"www.imooc.com",
port:80,
path:"/course/docomment",
method:"POST",
headers:{
'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=43db6e2f-172d-4882-a7a1-45880db683f6; imooc_isnew_ct=1488413104; Hm_lvt_c92536284537e1806a07ef3e6873f2b3=1489483158; loginstate=1; apsid=ZmMzZhZGJlMWRjYjQxZjczZGJlYmNlZWNlNTg3MjcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzM1ODI2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIyMDE4OThmMGQxOGUxNDdiNDJjMzY4ZTQwOTk5MmRjZXPrWGVz61g%3DNj; PHPSESSID=64rvb3bh2vqbj6ac3r7v5vjbf2; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1491811629,1491824274,1491832123,1491900000; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1491923496; IMCDNS=0; imooc_isnew=2; cvde=58ec965b0bc9d-242',
'Origin':'http://www.imooc.com',
'Referer':'http://www.imooc.com/video/8837',
'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
'X-Requested-With':'XMLHttpRequest'
}
}

var request = http.request(options,function(res){
console.log("status: "+res.statusCode);
console.log("headers: "+JSON.stringify(res.headers));

res.on('data',function(chunk){
console.log(Buffer.isBuffer(chunk));
console.log(typeof chunk);
})

res.on('end',function(){
console.log("评论完成");
})
})
request.on('error',function(e){
console.log("Error: "+e.message);
})
request.write(postData);
request.end();