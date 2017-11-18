iparea
========
### lookup ip area, get the information of ip: country or province, using sina API.

## install

npm install iparea

## usage

#### create object

```js
var ipArea = new (require('iparea'))();
```
#### set options
1 timeout option, default 1000ms.
```js
var ipArea = new (require('iparea'))({timeout: 1000});
```js
2 url option, using sina API proxy.<br/>
default: http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=
```js
var ipArea = new (require('iparea'))({url:'http://127.0.0.1:52000/iplookup/iplookup.php?format=json&ip=', timeout: 2000});
```

### method: getIPArea

```js
ipArea.getIPArea('127.0.0.1',function(err, data){
	console.log(data);
});
```

**inputs**

```js
0.0.0.0
127.0.0.1
192.168.1.1
183.129.210.50
66.104.77.20

```

**results**

```js
未识别
本地
局域网
浙江
美国
```

### method: getIPInfo

```js
ipArea.getIPInfo('127.0.0.1',function(err, data){
	console.log(data);
});
```

**inputs**

```js
0.0.0.0
127.0.0.1
192.168.1.1
183.129.210.50
66.104.77.20

```

**results**

```js
-2
{ ret: -1, ip: '127.0.0.1' }
{ ret: -1, ip: '192.168.1.1' }
{ ret: 1,
  start: -1,
  end: -1,
  country: '美国',
  province: '',
  city: '',
  district: '',
  isp: '',
  type: '',
  desc: '' 
}
 { ret: 1,
  start: -1,
  end: -1,
  country: '中国',
  province: '浙江',
  city: '杭州',
  district: '',
  isp: '',
  type: '',
  desc: '' 
}
```

## changelog

#### 1.0.9

Add method: getIPInfo.

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