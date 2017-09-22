
var ipArea = new (require('../index'))({timeout: 1000});

function testUnit(ip){
	ipArea.getIPArea(ip,function(err, data){
		console.log('Get area for', ip+':');
		if(err) console.error(err);
		if(!err) console.log(data);
	});
}

var ipList = ['127.0.0.1','0.0.0.0', '192.168.1.1', '183.129.210.50', '66.104.77.20'];

ipList.forEach(function(ip){
	testUnit(ip);
});
