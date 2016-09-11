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

module.exports = function(t,n){var e,l,i,o,s,h=require("http"),r=require("https"),u=!1,p="",c="";o=t.split("://"),u="https"==o[0]?!0:!1,s=o[1]?o[1]:o[0],o=s.split("/"),e=o[0],s=o[o.length-1].split(":"),s.length>1&&(c=parseInt(s[s.length-1]),o[o.length-1]=s.slice(0,s.length-1).join(":")),i=o[1]?o.slice(1).join("/"):"/",l=u?r:h;try{var a=l.request({host:e,path:i,port:c},function(t){t.setEncoding("utf8"),t.on("data",function(t){p+=t}),t.on("end",function(){n(!1,t,p)})});a.end()}catch(g){n(g,null,null)}};
// replace "module.exports" with whatever variable you like if you would rather insert it right into your code
