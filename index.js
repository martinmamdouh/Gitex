function onClickPlay(videoId) {
  document.getElementById("vid1").webkitRequestFullscreen();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
