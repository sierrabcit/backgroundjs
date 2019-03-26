document.getElementById("openimg").addEventListener("click",function() {
    document.getElementById("control").style.left = "0px";
});
document.getElementById("closeimg").addEventListener("click", function () {
	document.getElementById("control").style.left = "-200px";
});

document.getElementById("bg1").addEventListener("click",function() {
    document.getElementById("backgroundImage").style.backgroundImage = "url(images/bg1.jpg)";
});
document.getElementById("bg2").addEventListener("click",function() {
    document.getElementById("backgroundImage").style.backgroundImage = "url(images/bg2.jpg)";
});
 document.getElementById("bg3").addEventListener("click",function() {
    document.getElementById("backgroundImage").style.backgroundImage = "url(images/bg3.jpg)";
});
document.getElementById("bg4").addEventListener("click",function() {
    document.getElementById("backgroundImage").style.backgroundImage = "url(images/bg4.jpg)";
});


