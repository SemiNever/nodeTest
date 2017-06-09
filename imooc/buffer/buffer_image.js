var fs =require('fs');
fs.readFile('logo.jpg',function(err,origin_buffer){
console.log(Buffer.isBuffer(origin_buffer));
fs.writeFile('logo_buffer.jpg',origin_buffer,function(err){
      if(err) {console.log(err);}
})
  var base64Image = origin_buffer.toString('base64');

  console.log(base64Image);
   var decodeImage =new Buffer(base64Image,'base64');
   console.log(Buffer.compare(origin_buffer,decodeImage));
   fs.writeFile('logo_decode.jpg',decodeImage,function(err){
   	if(err){
   		console.log(err);
   	}
   })
});
