   // 借助httpAPI+node.js实现简单的爬虫
var http =require('http');    
var cheerio=require('cheerio');
// "cheerio"，一个nodeJS模块，类似于jquery，可以将html页面的char转换为document文档对象，然后用类似于jquery的方式进行操作DOM
// 可以在gitbbash下安装 $ npm install cheerio
var url="http://www.imooc.com/learn/348";

function filterChapters(html){
	var $ =cheerio.load(html);
	var chapters =$('.chapter');
    var courseData =[];
    chapters.each(function(item){
    	var chapter =$(this);
    	var chapterTitle =chapter.find('strong').text().trim();
    	var videos =chapter.find('.video').children('li');
        var chapterData ={
        	chapterTitle:chapterTitle,
        	videos:[]
        }
        videos.each(function(){   
            var video=$(this).find('a');
            var temp=video.text().trim();
            // trim()可以进行去除首尾空格操作
            var arr = temp.split('\n');

            var videoTitle = arr[0].trim() + ' ' +arr[1].trim()
            var id=video.attr('href').split('eo/')[1].trim()
// split()方法是将指定字符串按某指定的分隔符进行拆分，拆分将会形成一个字符串的数组并返回
            chapterData.videos.push({
            	title:videoTitle,
            	id:id
            })
        })
        courseData.push(chapterData);
    })
        return courseData;
}
// 通过函数遍历输出
function printCourseInfo(courseData){
 courseData.forEach(function(item){
	var chapterTitle =item.chapterTitle;
	console.log(chapterTitle+'\n');
	item.videos.forEach(function(video){
		console.log('【'+video.id+'】'+video.title+'\n');
	})
})
}
http.get(url,function(res){
	var html='';
	res.on('data',function(data){
         html+=data;
	})
	res.on('end',function(){
		// console.log(html);
		var courseData =filterChapters(html);
		printCourseInfo(courseData);
	})

}).on('error',function(){
	console.log('获取数据出错');
})

