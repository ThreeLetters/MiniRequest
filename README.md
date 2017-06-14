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
var request=function(f,b,c,d){var e=!1,h=!1;if(c){e=querystring.stringify(b);var g=c;h=d}else g=b,h=c;d=!1;b="/";var m="";c="";var a=f.split("://");d="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var k=a[0].split(":");f=k[0];k[1]&&(c=parseInt(k[1]));a[1]&&(b+=a.slice(1).join("/"));d=d?https:http;h&&(b+="?"+Date.now());try{var n=e?{host:f,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:f,
path:b,port:c},l=d.request(n,function(a){a.setEncoding("utf8");a.on("data",function(a){m+=a});a.on("end",function(){g(!1,a,m)})});l.on("error",function(a){g(a,null,null)});e&&l.write(e);l.end()}catch(p){g(p,null,null)}};
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
