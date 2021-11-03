window.addEventListener("DOMContentLoaded", function () {
  var vid = document.getElementById("music");
  vid.loop = true;
  vid.volume = 0.4;
  vid.load();
});
var music = document.getElementById("music");
// var tokei = "../IMAGE/TOP/tokei.png"
// var long = "../IMAGE/TOP/tokeilong.png"
// var short = "../IMAGE/TOP/tokeishort.png"
function welcome(){
  music.muted = false;
  music.play();
  document.getElementById("top").style.zIndex = "1";
  document.getElementById("clock").style.opacity = "1";
  document.getElementById("long").style.opacity = "1";
  document.getElementById("short").style.opacity = "1";
  
}