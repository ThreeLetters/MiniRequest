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
module.exports=function(b,c,d){var e=!1;if(d){e=querystring.stringify(c);var f=d}else f=c;var g=!1;c="/";var l="";d="";var a=b.split("://");g="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var h=a[0].split(":");b=h[0];h[1]&&(d=parseInt(h[1]));a[1]&&(c+=a.slice(1).join("/"));g=g?https:http;b=b+"?"+Date.now();try{var m=e?{host:b,path:c,port:d,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:b,path:c,port:d},
k=g.request(m,function(a){a.setEncoding("utf8");a.on("data",function(a){l+=a});a.on("end",function(){f(!1,a,l)})});k.on("error",function(a){f(a,null,null)});e&&k.write(e);k.end()}catch(n){f(n,null,null)}};
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
