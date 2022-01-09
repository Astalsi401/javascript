var dataUrl = 'https://github.com/Astalsi401/Astalsi401.github.io/blob/master/js/json/data.jsonhttps://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest()
xhr.open('GET', dataUrl, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    console.log(data);
}