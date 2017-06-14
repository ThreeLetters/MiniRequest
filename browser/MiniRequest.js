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
const http = require('http');
const https = require('https');
const querystring = require('querystring');
module.exports = function(/**/) {
   var url = arguments[0]
   var toSend = false;
   if (arguments[2]) { // POST
      toSend = querystring.stringify(arguments[1])
         var callback = arguments[2];
   } else var callback = arguments[1];
  var secure = false,
      host,
      method,
      path = "/",
      content = "",
      port = "",
      a,
      b;
a = url.split("://"); // split url string
if (a[0] == "https") secure = true; else secure = false; // check if using https
  b = (a[1]) ? a[1] : a[0]; // b = hostname
  a = b.split("/"); // split b into paths
 
  b = a[0].split(":")
   host = b[0]; // host
  if (b[1]) { // there is a port
    port = parseInt(b[1])
  }
  
  if (a[1]) path += a.slice(1).join("/");
  if (secure) {
    method = https;
  } else {
    method = http;
  }
 try {
var request = method.request((toSend) ? {host:host,path:path,port:port,method:"POST",headers: {'Content-Type': 'application/x-www-form-urlencoded','Content-Length': Buffer.byteLength(toSend)}} : {host:host,path:path,port:port}, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });

    res.on("end", function () {
        callback(false,res,content)
    });
});
    request.on('error',function(e) {
       callback(e,null,null);
    })
if (toSend) request.write(toSend)
request.end();
 } catch (e) {
   callback(e,null,null);
 }
}
