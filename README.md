iparea
========
### lookup ip area, get the information of ip: country or province, using sina API.

## install

npm install iparea

## usage

#### create object

```
var ipArea = new (require('iparea'))();
```
#### set options
1 timeout option, default 1000ms.
```
var ipArea = new (require('iparea'))({timeout: 1000});
```
2 url option, using sina API proxy.<br/>
default: http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=
```
var ipArea = new (require('iparea'))({url:'http://127.0.0.1:52000/iplookup/iplookup.php?format=json&ip=', timeout: 2000});
```

#### demo1

```
ipArea.getIPArea('183.129.210.50',function(err, data){
	console.log(data);
});
ipArea.getIPArea('66.104.77.20',function(err, data){
	console.log(data);
});
```

**result**

```
浙江
美国
```

#### demo2

```
ipArea.getIPArea('127.0.0.1',function(err, data){
	console.log(data);
});
```

**result**

```
本地
```

#### demo3

```
ipArea.getIPArea('192.168.1.1',function(err, data){
	console.log(data);
});
```

**result**

```
局域网
```

#### demo4

```
ipArea.getIPArea('0.0.0.0',function(err, data){
	console.log(data);
});
```

**result**

```
未识别
```

## changelog

#### 1.0.8

Add url option, using sina API proxy.

#### 1.0.7

Add timeout option;
Change method-name: getIPAdrea to getIPArea.

#### 1.0.6

Make all return data type to be string.

#### 1.0.5

1 Add return error param;
2 improve http deal.