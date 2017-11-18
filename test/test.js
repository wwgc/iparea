
var ipArea = new (require('../index'))({timeout: 1000});

function gtIpArea(ip){
	ipArea.getIPArea(ip,function(err, data){
		console.log('Get area for', ip+':');
		if(err) console.error(err);
		if(!err) console.log(data);
		console.log();
	});
}

function gtIpInfo(ip){
	ipArea.getIPInfo(ip,function(err, data){
		console.log('Get IPInfo for', ip+':');
		if(err) console.error(err);
		if(!err) console.log(data);
		console.log();
	});
}

var ipList = ['127.0.0.1','0.0.0.0', '192.168.1.1', '183.129.210.50', '66.104.77.20'];

ipList.forEach(function(ip){
	gtIpArea(ip);
});

setTimeout(function(){
	ipList.forEach(function(ip){
		gtIpInfo(ip);
	});
},100);
