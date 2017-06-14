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

window.request=function(c,g,e,k){var b=void 0,f=!1;if(e){b=g;var d=e;f=k}else d=g,f=e;try{var a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");a.open(b?"POST":"GET",c+(f?"?"+Date.now():""));a.onreadystatechange=function(){4==a.readyState&&(200===a.status?d(void 0,a,a.responseText):d(!0,a,!1))};if(b){a.setRequestHeader("Content-type","application/x-www-form-urlencoded");c=[];for(var h in b)c.push(encodeURIComponent(h)+"="+encodeURIComponent(b[h]));b=c.join("&")}a.send(b)}catch(l){d(l)}};
