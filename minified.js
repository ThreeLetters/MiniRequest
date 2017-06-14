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
module.exports=function(b,c,d){var e=!1;if(d){e=querystring.stringify(c);var f=d}else f=c;var g=!1;c="/";var l="";d="";var a=b.split("://");g="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var h=a[0].split(":");b=h[0];h[1]&&(d=parseInt(h[1]));a[1]&&(c+=a.slice(1).join("/"));g=g?https:http;b=b+"?"+Date.now();try{var m=e?{host:b,path:c,port:d,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:b,path:c,port:d},
k=g.request(m,function(a){a.setEncoding("utf8");a.on("data",function(a){l+=a});a.on("end",function(){f(!1,a,l)})});k.on("error",function(a){f(a,null,null)});e&&k.write(e);k.end()}catch(n){f(n,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
