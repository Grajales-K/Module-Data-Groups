let countdown; // Declare countdown globally to make it accessible

function setAlarm() 

// DO NOT EDIT BELOW HERE   this code below

var soundAlarm = new Audio("trebolClan.mp3");
var SoundStop = new Audio("stopAlarm.mp3");

const alarmInput = document.getElementById("alarmSet");
alarmInput.placeholder = "Type or select the time  ------------->";

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  soundAlarm.play();
}

function pauseAlarm() {
  clearInterval(countdown);
  soundAlarm.pause();
  SoundStop.play();
}

window.onload = setup;
