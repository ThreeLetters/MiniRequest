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
module.exports=function(f,b,c){var e=!1;if(c)var e=querystring.stringify(b),g=c;else g=b;var h=!1;b="/";var l="";c="";var a,d;a=f.split("://");h="https"==a[0]?!0:!1;d=a[1]?a[1]:a[0];a=d.split("/");d=a[0].split(":");f=d[0];d[1]&&(c=parseInt(d[1]));a[1]&&(b+=a.slice(1).join("/"));h=h?https:http;try{var k=h.request(e?{host:f,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:f,path:b,port:c},function(a){a.setEncoding("utf8");
a.on("data",function(a){l+=a});a.on("end",function(){g(!1,a,l)})});k.on("error",function(a){g(a,null,null)});e&&k.write(e);k.end()}catch(m){g(m,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
