const http = require('http')
const https = require('https');
module.exports = function(url,callback) {
  var secure = false,
      host,
      method,
      path,
      content = "",
      port = "",
      a,
      b;
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
  
  if (a[1]) path = a.slice(1).join("/"); else path = "/";
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
        callback(false,res.statusCode,content)
    });
});

request.end();
 } catch (e) {
   callback(e,null,null);
 }
}
