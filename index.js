function onClickPlay(videoId) {
  console.log(videoId);
  document.getElementById(videoId).webkitRequestFullscreen();
  stopOther(videoId);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function stopOther(vidId) {
  for (var id of ["vid1", "vid3", "vid4", "vid5", "vid6"]) {
    if (id == vidId) continue;
    document.getElementById(id).pause();
  }
}
