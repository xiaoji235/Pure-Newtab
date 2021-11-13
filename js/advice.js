/**关于与反馈**/
function openyj(){
	document.getElementById("yijian").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("yijian").style="display:block;opacity:1"},100)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:block;opacity:1"},100)
}

function closeyj(){
	document.getElementById("yijian").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("yijian").style="display:none"},200)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:none;opacity:0"},100)
}