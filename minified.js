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

const http=require("http"),https=require("https");module.exports=function(t,n){var e,s,h,l,o,i=!1,p="",u="";l=t.split("://"),i="https"==l[0]?!0:!1,o=l[1]?l[1]:l[0],l=o.split("/"),e=l[0],o=l[l.length-1].split(":"),o.length>1&&(u=parseInt(o[o.length-1]),l[l.length-1]=o.slice(0,o.length-1).join(":")),h=l[1]?l.slice(1).join("/"):"/",s=i?https:http;try{var r=s.request({host:e,path:h,port:u},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t.statusCode,p)})});r.end()}catch(c){n(c,null,null)}};
