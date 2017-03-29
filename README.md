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
var querystring=require("querystring"),http=require("http"),https=require("https");
module.exports=function(e,c,f){var d=!1,h="/",k="",l="",a,b;c=querystring.stringify(c);a=e.split("://");d="https"==a[0]?!0:!1;b=a[1]?a[1]:a[0];a=b.split("/");e=a[0];b=a[a.length-1].split(":");1<b.length&&(l=parseInt(b[b.length-1]),a[a.length-1]=b.slice(0,b.length-1).join(":"));a[1]&&(h+=a.slice(1).join("/"));d=d?https:http;try{var g=d.request({host:e,path:h,port:l,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(c)}},function(a){a.setEncoding("utf8");
a.on("data",function(a){k+=a});a.on("end",function(){f(!1,a,k)})});g.on("error",function(a){f(a,null,null)});g.write(c);g.end()}catch(m){f(m,null,null)}};
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
