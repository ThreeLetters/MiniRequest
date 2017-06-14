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
      toSend = querystring.stringify(arguments[1]) // stringify
         var callback = arguments[2];
   } else var callback = arguments[1];
  var secure = false,
      host,
      method,
      path = "/",
      content = "",
      port = "",
      urlSplit,
      hostSplit;
urlSplit = url.split("://"); // split url string into - method + "://" + host ...
if (urlSplit[0] == "https") secure = true; else secure = false; // check if using https
  urlSplit = (urlSplit[1]) ? urlSplit.slice(1) : urlSplit[0]; // remove https/http if there is one
  urlSplit = urlSplit.split("/"); // split url by "/".
 
  hostSplit = urlSplit[0].split(":") // split host into - hostname + ":" + port
   host = hostSplit[0]; // host
  if (hostSplit[1]) { // there is a port
    port = parseInt(hostSplit[1])
  }
  
  if (urlSplit[1]) path += urlSplit.slice(1).join("/"); // Get path, excluding hostname
   
  if (secure) { // check if secure and set right class
    method = https;
  } else {
    method = http;
  }
 try { // error handling
    
    // check if it is a POST request.
var options = (toSend) ? {host:host,path:path,port:port,method:"POST",headers: {'Content-Type': 'application/x-www-form-urlencoded','Content-Length': Buffer.byteLength(toSend)}} : {host:host,path:path,port:port}
var request = method.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });

    res.on("end", function () { // done
        callback(false,res,content)
    });
});
    request.on('error',function(e) {
       callback(e,null,null); // error
    })
if (toSend) request.write(toSend)
request.end();
 } catch (e) {
   callback(e,null,null); // error
 }
}
