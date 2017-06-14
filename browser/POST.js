
var data = [];

var toSend = {};

for (var i in toSend) {
    data.push(encodeURIComponent(i) + '=' + encodeURIComponent(toSend[i]));
}



var xhr = new XMLHttpRequest();

xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200) {
       
    }
    else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send(data.join("&"));
