// Load saved data from localStorage
document.getElementById("r_username").textContent = localStorage.getItem("username") || "—";
document.getElementById("r_email").textContent = localStorage.getItem("email") || "—";
document.getElementById("r_birth").textContent = localStorage.getItem("dob") || "—";

// Mask password by default (e.g., ********)
const savedPassword = localStorage.getItem("password") || "";
document.getElementById("r_password").textContent = "*".repeat(savedPassword.length);

// Toggle show/hide password
function togglePassword() {
    const passwordSpan = document.getElementById("r_password");
    const icon = document.getElementById("eyeIcon");

    if (passwordSpan.dataset.visible === "true") {
        // Hide password again
        passwordSpan.textContent = "*".repeat(savedPassword.length);
        passwordSpan.dataset.visible = "false";
        icon.setAttribute("name", "eye-off");
    } else {
        // Show full password
        passwordSpan.textContent = savedPassword;
        passwordSpan.dataset.visible = "true";
        icon.setAttribute("name", "eye");
    }
}

// Optional: Smooth fade-in animation
window.onload = () => {
    const box = document.querySelector(".results-box");
    box.style.opacity = "1";
    box.style.transition = "opacity 0.6s ease";
};

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