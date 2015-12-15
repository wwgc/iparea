iparea
========
### lookup ip area, get the information of ip: country or province.


## install

npm install iparea

## usage

```
var ipArea = new (require('../index'))();

ipArea.getIPAdrea('183.129.210.50',function(data){
	console.log(data);
});
ipArea.getIPAdrea('66.104.77.20',function(data){
	console.log(data);
});
```

### result

```
浙江
美国
```
