
var ipArea = new (require('../index'))();

ipArea.getIPAdrea('183.129.210.50',function(data){
	console.log(data);
});
ipArea.getIPAdrea('66.104.77.20',function(data){
	console.log(data);
});
