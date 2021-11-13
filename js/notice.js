if (localStorage.getItem("visited") != "true") {
    alert("由于本站是ml域名，站长也不会频繁更新，后期可能也会丢失，如果以后想继续使用，可以在酷安联系我或者直接自己在github下载源码搭建一个一样的网站，谢谢支持");
    localStorage.setItem("visited", true);
}