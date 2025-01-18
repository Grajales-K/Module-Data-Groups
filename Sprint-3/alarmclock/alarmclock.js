let countdown; // Declare countdown globally to make it accessible

function setAlarm(){
  // Clear any previous timer to prevent multiple timers running simultaneously
  clearInterval(countdown);

  // Get the value entered by the user in the input field and convert it to an integer
  let inputTime = parseInt(document.getElementById("alarmSet").value);

  // If the input is not a valid number or is less than or equal to 0, show an alert and stop execution
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please type or select your time");
    return;
  }
} 

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
