# MiniRequest
Why use an entire npm library such as Request to just do a small task? so use MiniRequest! It is all in one file (index.js) and if you dont want to use npm, use minified.js in your own projects! Dont want to have it in a separate file? Replace ``module.exports`` to whatever variable you want and put it in your code and you can use it by just calling the function request! Works just like the request module

## Documentation
#### Usage

do


``npm install minirequest``


then do in code: 


``var request = require('minirequests')``


or put minified.js into a file called request.js in your project and do


``var request = require('./request.js')``


or do this in your code


``var request = function(t,n){var e,l,i,o,s,h=require("http"),r=require("https"),u=!1,p="",c="";o=t.split("://"),u="https"==o[0]?!0:!1,s=o[1]?o[1]:o[0],o=s.split("/"),e=o[0],s=o[o.length-1].split(":"),s.length>1&&(c=parseInt(s[s.length-1]),o[o.length-1]=s.slice(0,s.length-1).join(":")),i=o[1]?o.slice(1).join("/"):"/",l=u?r:h;try{var a=l.request({host:e,path:i,port:c},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t,p)})});a.end()}catch(g){n(g,null,null)}};``


#### Using the function
```
request('www.google.com',function(error,response,content) {
if (!error && respone.statusCode = 200) {
console.log(content)
}
});
```
