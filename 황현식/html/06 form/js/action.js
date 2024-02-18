
var url = new URL(location.href)//'http://127.0.0.1:5500/action.html?user-id=abc&user-pw=1234'
var params = new URLSearchParams(url.search) //?user-id=abc&user-pw=1234'
var userId = params.get('user-id')//abc
var userPw = params.get('user-pw')//1234
alert(`전송된 id값은 ${userId}, 전송된 pw는 ${userPw}`)
location.href = '/'
