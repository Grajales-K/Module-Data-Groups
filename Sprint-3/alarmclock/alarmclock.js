let countdown; // Declare countdown globally to make it accessible

function setAlarm() {
  clearInterval(countdown); // Clear any previous timer to prevent overlapping

  // Get user input and validate it
  let inputTime = parseInt(document.getElementById("alarmSet").value);

  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please type or select your time 👇⏰");
    return;
  }

  //This lets us calculate the exact end time (endTime) when the countdown should stop
  const endTime = Date.now() + inputTime * 1000; // Calculate the exact end time in milliseconds

  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  function updateCountdown() {
    const timeRemaining = Math.max(0,Math.round((endTime - Date.now()) / 1000)
    ); // Time left in seconds

    // Update the time display
    document.getElementById("timeRemaining").textContent =
      formatTime(timeRemaining);

    // Check if the timer has reached 0
    if (timeRemaining === 0) {
      clearInterval(countdown); // Stop the countdown
      playAlarm(); // Play the alarm immediately
    }
  }

  // Display the initial time
  updateCountdown();

  // Set up the interval to update the countdown every 100ms for better precision
  countdown = setInterval(updateCountdown, 100);
}

// DO NOT EDIT BELOW HERE   this code below

let soundAlarm = new Audio("trebolClan.mp3");
let SoundStop = new Audio("stopAlarm.mp3");

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
  soundAlarm.currentTime = 0;
  SoundStop.play();
}

window.onload = setup;
