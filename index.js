const http = require('http')
const https = require('https');
module.exports = function(url,callback) {
  var secure = false,
      host,
      method,
      path,
      content = "",
      port = "";,
      a,
      b;
a = url.split("://");
if (a[0] == "https") secure = true; else secure = false;
  b = a[1];
  a = b.split("/");
  host = a[0];
  b = a.slice(1); // needed
  a = b[b.length - 1];
  a = a.split(":");
  if (a.length > 1) {
    port = parseInt(a[a.length - 1])
   b[b.length - 1] = a.slice(0,a.length - 1).join(":"); 
  }
  path = b.join("/");
  if (secure) {
    method = https;
  } else {
    method = http;
  }
 try {
var request = method.request({host:host,path:path,port:port}, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });

    res.on("end", function () {
        callback(false,res.statusCode,body)
    });
});

request.end();
 } catch (e) {
   callback(e,null,null);
 }
}
