[![NPM](https://img.shields.io/badge/Module-Npm-blue.svg)](https://www.npmjs.com/package/minirequest)
[![Donate](https://img.shields.io/badge/Donate-Paypal-brightgreen.svg)](https://paypal.me/andrews54757)
# MiniRequest
Why use an entire npm library such as Request to just do a small task? so use MiniRequest! It is all in one file (index.js) and if you dont want to use npm, use minified.js in your own projects! Dont want to have it in a separate file? Replace ``module.exports`` to whatever variable you want and put it in your code and you can use it by just calling that function! Works just like the request module

## Documentation
#### Usage

do


``npm install minirequest``


then do in code: 


```js
var request = require('minirequest')
```


or put minified.js into a file called request.js in your project and do


```js
var request = require('./request.js')
```


or do this in your code


```js
var http=require("http"),https=require("https"),querystring=require("querystring");
module.exports=function(f,b,c){var e=!1;if(c)var e=querystring.stringify(b),g=c;else g=b;var h=!1;b="/";var l="";c="";var a,d;a=f.split("://");h="https"==a[0]?!0:!1;d=a[1]?a[1]:a[0];a=d.split("/");d=a[0].split(":");f=d[0];d[1]&&(c=parseInt(d[1]));a[1]&&(b+=a.slice(1).join("/"));h=h?https:http;try{var k=h.request(e?{host:f,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:f,path:b,port:c},function(a){a.setEncoding("utf8");
a.on("data",function(a){l+=a});a.on("end",function(){g(!1,a,l)})});k.on("error",function(a){g(a,null,null)});e&&k.write(e);k.end()}catch(m){g(m,null,null)}};
```


#### Using the function
```js
// GET

request('www.google.com',function(error,response,content) {
if (!error && respone.statusCode = 200) {
console.log(content)
}
});

// POST

request('www.google.com',somethingtosend,function(error,response,content) {
if (!error && respone.statusCode = 200) {
console.log(content)
}
});

```
