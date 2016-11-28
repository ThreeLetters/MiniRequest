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

const http=require("http"),https=require("https");module.exports=function(t,n){var e,l,o,h,i=!1,s="/",p="",r="";o=t.split("://"),i="https"==o[0]?!0:!1,h=o[1]?o[1]:o[0],o=h.split("/"),e=o[0],h=o[o.length-1].split(":"),h.length>1&&(r=parseInt(h[h.length-1]),o[o.length-1]=h.slice(0,h.length-1).join(":")),o[1]&&(s+=o.slice(1).join("/")),l=i?https:http;try{var u=l.request({host:e,path:s,port:r},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t,p)})});u.on("error",function(t){n(t,null,null)}),u.end()}catch(c){n(c,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
