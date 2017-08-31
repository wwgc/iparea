iparea
========
### lookup ip area, get the information of ip: country or province, using sina interface.

## install

npm install iparea

## usage

#### demo1

```
var ipArea = new (require('iparea'))();

ipArea.getIPAdrea('183.129.210.50',function(err, data){
	console.log(data);
});
ipArea.getIPAdrea('66.104.77.20',function(err, data){
	console.log(data);
});
```

#### result

```
浙江
美国
```

#### demo2

```
ipArea.getIPAdrea('127.0.0.1',function(err, data){
	console.log(data);
});
```

#### result

```
本地
```

#### demo3

```
ipArea.getIPAdrea('192.168.1.1',function(err, data){
	console.log(data);
});
```

#### result

```
局域网
```

#### demo4

```
ipArea.getIPAdrea('0.0.0.0',function(err, data){
	console.log(data);
});
```

#### result

```
未识别
```

## changelog

#### 1.0.5

1 Add return error param;
2 impove http deal.