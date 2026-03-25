// script.js

// Function to display the current date and time
function displayCurrentDateTime() {
    const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log("Current Date and Time (UTC):", currentDateTime);
}

// Execute the function on page load
window.onload = function() {
    displayCurrentDateTime();
};