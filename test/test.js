
var ipArea = new (require('../index'))();

ipArea.getIPAdrea('127.0.0.1',function(data){
	console.log('127.0.0.1:', data);
});

ipArea.getIPAdrea('0.0.0.0',function(data){
	console.log('0.0.0.0:', data);
});

ipArea.getIPAdrea('192.168.1.1',function(data){
	console.log('192.168.1.1:', data);
});

ipArea.getIPAdrea('183.129.210.50',function(data){
	console.log('183.129.210.50:', data);
});

ipArea.getIPAdrea('66.104.77.20',function(data){
	console.log('66.104.77.20:', data);
});



