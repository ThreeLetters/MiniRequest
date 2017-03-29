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
const querystring = require('querystring');
const http = require('http')
const https = require('https');
module.exports = function(url,data,callback) {
  var secure = false,
      host,
      method,
      path = "/",
      content = "",
      port = "",
      a,
      b;
       var post_data = querystring.stringify(data)
a = url.split("://");
if (a[0] == "https") secure = true; else secure = false;
  b = (a[1]) ? a[1] : a[0];
  a = b.split("/");
  host = a[0];
  b = a[a.length - 1].split(":");
  if (b.length > 1) {
    port = parseInt(b[b.length - 1])
   a[a.length - 1] = b.slice(0,b.length - 1).join(":"); 
  }
  
  if (a[1]) path += a.slice(1).join("/");
  if (secure) {
    method = https;
  } else {
    method = http;
  }
 try {
var request = method.request({host:host,path:path,port:port,method:"POST",headers: {'Content-Type': 'application/x-www-form-urlencoded','Content-Length': Buffer.byteLength(post_data)}}, function(res) {
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
request.write(post_data);
request.end();
 } catch (e) {
   callback(e,null,null);
 }
}