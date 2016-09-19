[![NPM] (https://img.shields.io/badge/Module-Npm-blue.svg)] (https://www.npmjs.com/package/minirequest)
[![Donate] (https://img.shields.io/badge/Donate-Paypal-brightgreen.svg)] (paypal.me/andrews54757)
# MiniRequest
Why use an entire npm library such as Request to just do a small task? so use MiniRequest! It is all in one file (index.js) and if you dont want to use npm, use minified.js in your own projects! Dont want to have it in a separate file? Replace ``module.exports`` to whatever variable you want and put it in your code and you can use it by just calling that function! Works just like the request module

## Documentation
#### Usage

do


``npm install minirequest``


then do in code: 


``var request = require('minirequests')``


or put minified.js into a file called request.js in your project and do


``var request = require('./request.js')``


or do this in your code


``var request = function(t,n){var e,l,i,o,s=require("http"),h=require("https"),r=!1,u="/",p="",c="";i=t.split("://"),r="https"==i[0]?!0:!1,o=i[1]?i[1]:i[0],i=o.split("/"),e=i[0],o=i[i.length-1].split(":"),o.length>1&&(c=parseInt(o[o.length-1]),i[i.length-1]=o.slice(0,o.length-1).join(":")),i[1]&&(u+=i.slice(1).join("/")),l=r?h:s;try{var a=l.request({host:e,path:u,port:c},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t,p)})});a.end()}catch(g){n(g,null,null)}};``


#### Using the function
```
request('www.google.com',function(error,response,content) {
if (!error && respone.statusCode = 200) {
console.log(content)
}
});
```
