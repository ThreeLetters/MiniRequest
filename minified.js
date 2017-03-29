/*
Copyright 2016 Andrew S

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var querystring=require("querystring"),http=require("http"),https=require("https");
module.exports=function(e,c,f){var d=!1,h="/",k="",l="",a,b;c=querystring.stringify(c);a=e.split("://");d="https"==a[0]?!0:!1;b=a[1]?a[1]:a[0];a=b.split("/");e=a[0];b=a[a.length-1].split(":");1<b.length&&(l=parseInt(b[b.length-1]),a[a.length-1]=b.slice(0,b.length-1).join(":"));a[1]&&(h+=a.slice(1).join("/"));d=d?https:http;try{var g=d.request({host:e,path:h,port:l,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(c)}},function(a){a.setEncoding("utf8");
a.on("data",function(a){k+=a});a.on("end",function(){f(!1,a,k)})});g.on("error",function(a){f(a,null,null)});g.write(c);g.end()}catch(m){f(m,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
