var fs =require('fs');
fs.createReadStream('1.wmv').pipe(fs.createWriteStream('1-pipe.mp4'))