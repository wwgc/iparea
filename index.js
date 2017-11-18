var http = require('http');

var IPArea = function(options){
	options = options || {};

	var baseUrl = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=";
	this.url = options.url || baseUrl;
	this.timeout = options.timeout || 1000;
};

IPArea.prototype.getIPArea = function(ip, next){
	if(ip === '127.0.0.1')return next(null, '本地');

	var url = this.url, timeout = this.timeout;

	http.get(url + ip, function(res){
		var statusCode = res.statusCode;
		var contentType = res.headers['content-type'];

		var error;

        if (statusCode !== 200) {
         	error = new Error('Request Failed.Status Code:' + statusCode);
      	} else if (!/^application\/json/.test(contentType)) {
        	error = new Error('Invalid content-type.Expected application/json but received' + contentType);
      	}

     	if (error) {
        	// consume response data to free up memory
        	res.resume();
        	return next(error, '');
      	}

		res.setEncoding('utf8');
		var data = '';
		res.on('data', function(chunk){
			data += chunk;
		});
		res.on('end', function(){
			try{
				var ipDetail = JSON.parse(data);
				if(ipDetail instanceof Number){
					return next(null, '未识别');	
				}else if(ipDetail.ret === -1){
					return next(null, '局域网');
				}else if(ipDetail.ret === 1){
					return next(null, ipDetail.country === '中国' ? ipDetail.province: ipDetail.country);
				}else{
					return next(null, '未识别');	
				}
			}catch(e){
				return next(e, '');
			}
		});
	}).on('error', function(e){
		return next(e, '');
	}).setTimeout(timeout, function(){
		this.abort();
	});
};

IPArea.prototype.getIPInfo = function(ip, next){
	if(ip === '127.0.0.1')return next(null, { ret: -1, ip: '127.0.0.1' });

	var url = this.url, timeout = this.timeout;

	http.get(url + ip, function(res){
		var statusCode = res.statusCode;
		var contentType = res.headers['content-type'];

		var error;

        if (statusCode !== 200) {
         	error = new Error('Request Failed.Status Code:' + statusCode);
      	} else if (!/^application\/json/.test(contentType)) {
        	error = new Error('Invalid content-type.Expected application/json but received' + contentType);
      	}

     	if (error) {
        	// consume response data to free up memory
        	res.resume();
        	return next(error, '');
      	}

		res.setEncoding('utf8');
		var data = '';
		res.on('data', function(chunk){
			data += chunk;
		});
		res.on('end', function(){
			try{
				return next(null, JSON.parse(data));
			}catch(e){
				return next(e, '');
			}
		});
	}).on('error', function(e){
		return next(e, '');
	}).setTimeout(timeout, function(){
		this.abort();
	});
};

module.exports = IPArea;