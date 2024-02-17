var url = new URL(location.href)//http://127.0.0.1:5500/index.html
var params = new URLSearchParams(url.search)
var userid = params.get('user-id')//abc
var userpw = params.get('user-pw')//1234
alert(`전송된 id값은 abc${user-id}, 전송된 pw는 ${user-pw}1234`)
location.href = '/'