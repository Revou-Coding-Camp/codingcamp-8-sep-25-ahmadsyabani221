// Prompt user for name and update welcome message
function welcomeMessage() {
    let username = prompt("Hi there! What's your name?");
    if (username) {
        document.getElementById('welcome-user').innerText = username;
    }
}

// Validate contact form
function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill out all fields before submitting.");
    } else {
        alert("✅ Thanks for contacting us, " + name + "!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}

// Run welcome message on page load
window.onload = welcomeMessage;
