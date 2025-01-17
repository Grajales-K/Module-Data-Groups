function setAlarm() {

}

// DO NOT EDIT BELOW HERE

var runTIme = new Audio("trebolClan.mp3");
var stopTIme = new Audio("stopAlarm.mp3");


function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  stopTIme.pause();
}

window.onload = setup;
