// 决定资源操作行为的函数
function(req,res){
	switch(req.method){
		case 'POST':
		upload(req,res);
		break;
		case 'DELETE':
		remove(req,res);
		break;
		case 'PUT':
		create(req,res);
		break;
		case 'GET':
		default:
		get(req,res);
	}

}