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

var http=require("http"),https=require("https"),querystring=require("querystring");
module.exports=function(e,b,c){var d=!1;if(c){d=querystring.stringify(b);var f=c}else f=b;var g=!1;b="/";var l="";c="";var a=e.split("://");g="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var h=a[0].split(":");e=h[0];h[1]&&(c=parseInt(h[1]));a[1]&&(b+=a.slice(1).join("/"));g=g?https:http;b+="?"+Date.now();try{var m=d?{host:e,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(d)}}:{host:e,path:b,port:c},
k=g.request(m,function(a){a.setEncoding("utf8");a.on("data",function(a){l+=a});a.on("end",function(){f(!1,a,l)})});k.on("error",function(a){f(a,null,null)});d&&k.write(d);k.end()}catch(n){f(n,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
