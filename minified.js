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
module.exports=function(f,b,c,d){var e=!1,h=!1;if(c){e=querystring.stringify(b);var g=c;h=d}else g=b,h=c;d=!1;b="/";var m="";c="";var a=f.split("://");d="https"==a[0]?!0:!1;a=a[1]?a.slice(1).join("://"):a[0];a=a.split("/");var k=a[0].split(":");f=k[0];k[1]&&(c=parseInt(k[1]));a[1]&&(b+=a.slice(1).join("/"));d=d?https:http;h&&(b+="?"+Date.now());try{var n=e?{host:f,path:b,port:c,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(e)}}:{host:f,
path:b,port:c},l=d.request(n,function(a){a.setEncoding("utf8");a.on("data",function(a){m+=a});a.on("end",function(){g(!1,a,m)})});l.on("error",function(a){g(a,null,null)});e&&l.write(e);l.end()}catch(p){g(p,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
