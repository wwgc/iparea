var http = require('http');

var IPArea = function(){
	this.url = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=";
}

IPArea.prototype.getIPAdrea = function(ip, next){
	http.get(this.url + ip, function(res){
		res.setEncoding('utf8');
		res.on('data',function(data){
			var ipDetail = JSON.parse(data);
			next(ipDetail.country === '中国' ? ipDetail.province: ipDetail.country);
		});
	});
}

module.exports = IPArea;