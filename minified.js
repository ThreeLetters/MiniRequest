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

module.exports = function(t,n){var e,l,i,o,s=require("http"),h=require("https"),r=!1,u="/",p="",c="";i=t.split("://"),r="https"==i[0]?!0:!1,o=i[1]?i[1]:i[0],i=o.split("/"),e=i[0],o=i[i.length-1].split(":"),o.length>1&&(c=parseInt(o[o.length-1]),i[i.length-1]=o.slice(0,o.length-1).join(":")),i[1]&&(u+=i.slice(1).join("/")),l=r?h:s;try{var a=l.request({host:e,path:u,port:c},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t,p)})});a.end()}catch(g){n(g,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
