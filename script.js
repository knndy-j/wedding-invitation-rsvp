// Function to open the RSVP modal
function openRsvp() {
    const modal = document.getElementById("rsvpModal");
    modal.style.display = "flex";
    modal.style.zIndex = "1000"; // Ensure the RSVP modal is on top
}

// Function to close the RSVP modal
function closeRsvp() {
    document.getElementById("rsvpModal").style.display = "none";
}

// Function to submit RSVP form and display a thank you message
function submitRsvp(event) {
    event.preventDefault(); // Prevent form from submitting traditionally (reloading page)
    const name = document.getElementById("name").value;
    const message = `Thank you, ${name}! Your RSVP has been received. Please note that you are strictly allowed to bring one additional guest.`;

    document.getElementById("rsvpMessage").innerText = message;
    document.getElementById("rsvpForm").reset(); // Clear the form after submission
    clearValidationErrors(); // Clear validation error messages
}

// Function to clear validation error messages
function clearValidationErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(error => error.innerText = "");
}

// Countdown Timer to the wedding day
function countdown(weddingDateString) {
    const weddingDate = new Date(weddingDateString).getTime(); // Set wedding date and time
    const timer = document.getElementById("timer");

    // Update countdown every second
    setInterval(() => {
        const now = Date.now(); // Get current time
        const timeLeft = weddingDate - now; // Calculate time left

        if (timeLeft < 0) {
            timer.innerText = "It's the Wedding Day!";
            return;
        }

        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the countdown
        timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Function to toggle the menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Initialize the countdown function when the page loads
const weddingDateString = "May 15, 2025 14:00:00";
countdown(weddingDateString);
