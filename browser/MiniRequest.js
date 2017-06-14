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

window.request = function(/**/) {
 var url = arguments[0],
     post = undefined,
     callback,
     bust = false;
   
   if (arguments[2]) { // post
      post = arguments[1];
      callback = arguments[2];
      bust = arguments[3];
   } else {
      callback = arguments[1];
      bust = arguments[2];
   }
   try {
   var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); // IE support
   xhr.open(post ? 'POST' : 'GET', url + (bust ? ("?" + Date.now()) : ""));
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
      if (xhr.status === 200) {
         callback(undefined,xhr,xhr.responseText);
      } else {
         callback(true,xhr,false);
      }
      
    var body = xhr.responseText;
    var res = xhr
    }
   };
    if (post) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
       var toPost = [];
       for (var i in post) {
        toPost.push(encodeURIComponent(i) + '=' + encodeURIComponent(post[i])) 
       }
       
       post = toPost.join("&")
    }
      
   xhr.send(post);
   } catch (e) {
    callback(e);  
   }
}
