var http = require('http');

var IPArea = function(){
	this.url = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=";
}

IPArea.prototype.getIPAdrea = function(ip, next){
	if(ip === '127.0.0.1')return next('本地');

	http.get(this.url + ip, function(res){
		res.setEncoding('utf8');
		res.on('data',function(data){
			try{
				var ipDetail = JSON.parse(data);
				if(ipDetail instanceof Number){
					next('未识别');	
				}else if(ipDetail.ret === -1){
					next('局域网');
				}else if(ipDetail.ret === 1){
					next(ipDetail.country === '中国' ? ipDetail.province: ipDetail.country);
				}else{
					next('未识别');	
				}
			}catch(e){
				console.log('Error happend when parsing response data:', e.message);
				next('');
			}
		});
	}).on('error', function(e){
		console.log('Error happened when getting ip area:', e.message);
		next('');
	});
}

module.exports = IPArea;