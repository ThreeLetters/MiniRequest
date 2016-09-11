const http = require('http')
const https = require('https');
module.exports = function(url,callback) {
  var secure = false,
      host,
      path,
      urlb,
      port = "";,
      a,
      b,
      c;
a = url.split("://");
if (a[0] == "https") secure = true; else secure = false;
  b = a[1];
  a = b.split("/");
  host = a[0];
  b = a.slice(1); // needed
  a = b[b.length - 1];
  a = a.split(":");
  if (a[1] && !a[2]) {
    port = parseInt(a[1])
   b[b.length - 1] = a[0]; 
  }
  
}
