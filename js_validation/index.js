document.getElementById("userSubmit").addEventListener("click", function (event) {
    event.preventDefault(); // stop form submitting

    const username = document.getElementById("userInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const dob = document.getElementById("birthInput").value.trim();
    const password = document.getElementById("pinInput").value.trim();

    const userErr = document.getElementById("userError");
    const emailErr = document.getElementById("emailError");
    const dobErr = document.getElementById("dobError");
    const passErr = document.getElementById("passwordError");

    // Clear initial errors
    userErr.textContent = "";
    emailErr.textContent = "";
    dobErr.textContent = "";
    passErr.textContent = "";

    let valid = true;

    // Username
    if (username.length === 0) {
        userErr.textContent = "Username cannot be empty.";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailErr.textContent = "Enter a valid email address.";
        valid = false;
    }

    // DOB
    const dobDate = new Date(dob);
    const today = new Date();

    if (isNaN(dobDate.getTime())) {
        dobErr.textContent = "Enter a valid date.";
        valid = false;
    } else if (dobDate > today) {
        dobErr.textContent = "Date cannot be in the future.";
        valid = false;
    }

    // Password (8+ chars, letters + numbers)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        passErr.textContent = "Must be 8+ characters and include letters & numbers.";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("dob", dob);
        localStorage.setItem("password", password);

        window.location.href = "results.html";
    }
});

// 🔥 Remove error messages when user types
["userInput", "emailInput", "birthInput", "pinInput"].forEach(id => {
    document.getElementById(id).addEventListener("input", function () {
        const err = document.getElementById(id.replace("Input", "Error"));
        if (err) err.textContent = "";
    });
});

function togglePassword() {
    const input = document.getElementById("pinInput");
    const icon = document.getElementById("eyeIcon");

    if (input.type == "password") {
        input.type = "text";
        icon.setAttribute("name", "eye");     // open eye icon
    } else {
        input.type = "password";
        icon.setAttribute("name", "eye-off"); // closed eye icon
    }
}

// Fade-in the login box first
const loginBox = document.querySelector(".login-box");
loginBox.style.opacity = 0;
window.onload = () => {
    loginBox.style.transition = "opacity 1s ease";
    loginBox.style.opacity = 1;

    // Fade-in each input-box sequentially
    const fields = document.querySelectorAll(".input-box");
    fields.forEach((field, index) => {
        field.style.opacity = 0;
        field.style.transform = "translateY(20px)";
        setTimeout(() => {
            field.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            field.style.opacity = 1;
            field.style.transform = "translateY(0)";
        }, index * 200); // stagger by 200ms
    });

    // Fade-in the button last
    const button = document.getElementById("userSubmit");
    button.style.opacity = 0;
    setTimeout(() => {
        button.style.transition = "opacity 0.8s ease";
        button.style.opacity = 1;
    }, fields.length * 200 + 200); // after all fields
};