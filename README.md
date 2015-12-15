iparea
========
### lookup ip area, get the information of ip: country or province.


## install

npm install iparea

## usage

```
var ipArea = new (require('iparea'))();

ipArea.getIPAdrea('183.129.210.50',function(data){
	console.log(data);
});
ipArea.getIPAdrea('66.104.77.20',function(data){
	console.log(data);
});
```

#### result

```
浙江
美国
```

```
ipArea.getIPAdrea('127.0.0.1',function(data){
	console.log(data);
});
```

#### result

```
本地
```

```
ipArea.getIPAdrea('192.168.1.1',function(data){
	console.log(data);
});
```

#### result

```
局域网
```

```
ipArea.getIPAdrea('0.0.0.0',function(data){
	console.log(data);
});
```

#### result

```
未识别
```