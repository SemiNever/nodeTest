var klass =require('./klass.js');
klass.add('scott',['xiaoming','xiaozhang']);
exports.add=function(klasses){
	klasses.forEach(function(item,index){
		var _klass =item;
		var  teacherName =item.teacherName;
		var students =item.students;

		klass.add(teacherName,students);
	})
}
// exports.add([teacherName='mars',students=['黑穷丑','矮穷矬'],teacherName='mars',students=['小红','小明']]);