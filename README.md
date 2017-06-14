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
module.exports=function(e,b,c){var d=!1;if(c){d=querystring.stringify(b);var f=c}else f=b;var g=!1;b="/";var l="";c="";var a=e.split("://");g="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var h=a[0].split(":");e=h[0];h[1]&&(c=parseInt(h[1]));a[1]&&(b+=a.slice(1).join("/"));g=g?https:http;b+="?"+Date.now();try{var m=d?{host:e,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(d)}}:{host:e,path:b,port:c},
k=g.request(m,function(a){a.setEncoding("utf8");a.on("data",function(a){l+=a});a.on("end",function(){f(!1,a,l)})});k.on("error",function(a){f(a,null,null)});d&&k.write(d);k.end()}catch(n){f(n,null,null)}};
```


#### Using the function
```js
// GET

request('www.google.com',function(error,response,content) {
if (!error && response.statusCode = 200) {
console.log(content)
}
});

// POST
var somethingtosend = {
blah: "blah"
}

request('www.google.com',somethingtosend,function(error,response,content) {
if (!error && response.statusCode = 200) {
console.log(content)
}
});

```
