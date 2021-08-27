/*感谢yanji的技术支持 
improved by yanji. url:https://simsoft.top, welcome to vsit.*/

backurl=localStorage.getItem("backurl")


if(backurl){
	document.getElementsByTagName("body")[0].style="background-image: url("+backurl+");"
}else{
	document.getElementsByTagName("body")[0].style="background-image: url(https://dl3.img.timecdn.cn/2021/07/06/bg.png);"
}


function openset(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:block;opacity:1"},100)
}

function savebackimg(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:none"},200)
	localStorage.setItem("backurl",document.getElementById("backimg").value)
	alert("保存成功！")
	window.location.reload()
}

function closeset(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:none"},200)
}
