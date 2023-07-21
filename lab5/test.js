let timerId; // Variable to store the timer ID
let timeInSeconds = 60; // Set the initial time in seconds
let timerRunning = false; // Variable to track if the timer is running

function startTimer() {
if (!timerRunning) {
timerId = setInterval(updateTimer, 1000); // Start the timer
timerRunning = true;
}
}

function stopTimer() {
if (timerRunning) {
clearInterval(timerId); // Stop the timer
timerRunning = false;
}
}

function resumeTimer() {
if (!timerRunning) {
timerId = setInterval(updateTimer, 1000); // Resume the timer
timerRunning = true;
}
}

function updateTimer() {
const timerElement = document.getElementById('timer');
const minutes = Math.floor(timeInSeconds / 60);
const seconds = timeInSeconds % 60;

// Display the formatted time in the "MM:SS" format
timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

timeInSeconds--; // Decrement the time

if (timeInSeconds < 0) {
clearInterval(timerId); // Clear the timer
timerElement.innerText = "Time's up!"; // Display a message after time runs out
timerRunning = false;
// Call the function to end the functionality after the time runs out
endFunctionality();
}
}

// Function to end the functionality after the time runs out
function endFunctionality() {
// Your code to end the functionality here
// Add your logic here to handle the functionality after the time runs out
}
