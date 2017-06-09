var http =require('http');
var fs =require('fs');
var request=require('request');
http
   .createServer(function(req,res){

   	fs.createReadStream('../buffer/logo.png').pipe(res);
     // request('https://www.baidu.com/img/bd_logo1.png').pipe(res);
   }).listen(8090)