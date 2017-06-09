var http =require('http');
var cheerio =require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var videoIds = [75,134,197,259,348,637];

function filterChapters(html){
	var $ =cheerio.load(html);
	var chapters =$(".chapter");
	var title = $('.course-infos .w .path span').text().trim(); 
    var number = parseInt($($('.static-item .js-learn-num')).text().trim(), 10)
     
     var courseData = {
     	title: title,
     	number:number,
     	videos:[]
     };
      chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
 
        videos.each(function(item){
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().trim();
            var id = video.attr('href').split('/video/')[1].trim();
 
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.videos.push(chapterData);
    })
    return courseData;

}

function printCourseInfo(coursesData){
        coursesData.forEach(function(courseData){
        console.log(courseData.number + '人学过' + courseData.title);
        })

        coursesData.forEach(function(courseData){
              console.log('###' + courseData.title);
              courseData.videos.forEach(function(item) {
            var chapterTitle = item.chapterTitle;
 
            console.log(chapterTitle);
 
            item.videos.forEach(function(video) {
                console.log(' 【'+video.id+'】'+video.title);
            })
        })
        })

 console.log('\n');
}
/*
    异步的爬取数据，传入需要爬的网站的url
*/
function getPageAsync(url) {
    return new Promise(function(resolve,reject) {
        console.log('正在爬取'+url);
        //给http模块添加get方法
        //get方法必须传入url，可以添加success方法（成功时运行的函数）
        http.get(url,function(res) {
            var html = '';
            //on()绑定事件
            //data事件是不断获取返回的数据
            res.on('data',function(data){
                //获取所有页面代码
                html += data;
            })
            //end事件是结束发送请求
            res.on('end',function(){
                //undefined
                resolve(html);
            })
        }).on('error',function(e){
            //绑定错误事件，返回错误原因
            reject(e);
            console.log('获取课程数据出错');
        })
 
    })
}
//Promise对象的数组
var fetctCourseArray = [];
//遍历所有的课程id（id保存在这个数组videoIds里了）
videoIds.forEach(function(id) {
    //爬到所有课程页面的源码，返回Promise对象，并保存在数组里
    fetctCourseArray.push(getPageAsync(baseUrl + id));
})
//Promise.all(),返回一个Promise对象，使传入的参数（可迭代参数，比如数组）都resolve一遍
//Promise.resolve(),解析promise对象，按照后面的.then方法解析
//.then(),链式调用
Promise
    .all(fetctCourseArray)
    .then(function(pages) {
        //存放页面解析结果
        var coursesData = [];
        //pages是课程页面
        pages.forEach(function(html) {
            //通过filterChapters解析html
            var courses = filterChapters(html);
            //把解析的结果放进coursesData[]
            coursesData.push(courses);
        })
        //由高到低排序
        coursesData.sort(function(a,b) {
            return a.number > b.number
        })
        //打印输出
        printCourseInfo(coursesData);
    })