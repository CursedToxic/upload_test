const params = new URLSearchParams(window.location.search);
const username = params.get("username") || "Not provided";
const email = params.get("email") || "Not provided";
const birth = params.get("birthdate") || "Not provided";
const password = params.get("password") || "Not provided";

document.getElementById("r_username").textContent = username;
document.getElementById("r_email").textContent = email;
document.getElementById("r_birth").textContent = birth;

// mask password initially
const r_password = document.getElementById("r_password");
r_password.textContent = "*".repeat(password.length);

// password toggle
const eyeIcon = document.getElementById("eyeIcon");
function togglePassword() {
    if (r_password.textContent.includes("*")) {
        r_password.textContent = password;
        eyeIcon.setAttribute("name", "eye");
    } else {
        r_password.textContent = "*".repeat(password.length);
        eyeIcon.setAttribute("name", "eye-off");
    }
}
window.togglePassword = togglePassword; // make function accessible in HTML


// Fade-in each field sequentially
const fields = document.querySelectorAll(".results-list p");
fields.forEach((field, index) => {
    field.style.opacity = 0;
    field.style.transform = "translateY(20px)";
    setTimeout(() => {
        field.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        field.style.opacity = 1;
        field.style.transform = "translateY(0)";
    }, index * 300); // stagger each by 300ms
});

// Fade-in results box itself
const resultsBox = document.querySelector(".results-box");
resultsBox.style.opacity = 0;
window.onload = () => {
    resultsBox.style.transition = "opacity 1s ease";
    resultsBox.style.opacity = 1;

// Fade-in each field sequentially
const fields = document.querySelectorAll(".results-list p");
fields.forEach((field, index) => {
    field.style.opacity = 0;
    field.style.transform = "translateY(20px)";
    setTimeout(() => {
        field.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        field.style.opacity = 1;
        field.style.transform = "translateY(0)";
    }, index * 300); // stagger each by 300ms
});

// Fade-in the back button after all fields
const backButton = document.querySelector(".back-btn");
backButton.style.opacity = 0;
const delay = fields.length * 300 + 200; // 200ms extra after last field
setTimeout(() => {
    backButton.style.transition = "opacity 0.8s ease";
    backButton.style.opacity = 1;
    }, delay);
}