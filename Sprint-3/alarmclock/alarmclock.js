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

  // Store the remaining time for the countdown
  let timeRemaining = inputTime;

    /**
   * Function to format the time into "MM:SS" format
   * @param {number} seconds - The number of seconds to be formatted
   * @returns {string} - The formatted time in the form "Time Remaining: MM:SS"
   */
  function formatTime(seconds) {
    // Calculate minutes and remaining seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Return the formatted time as a string
    return `Time Remaining: ${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
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
