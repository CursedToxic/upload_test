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

document.getElementById("userSubmit").onclick = function(event){
    const username = document.getElementById("userInput").value;
    const email = document.getElementById("emailInput").value;
    const birthdate = document.getElementById("birthInput").value;
    const password = document.getElementById("pinInput").value;

    const passwordIsValid = document.getElementById("pinInput").checkValidity();

    if (!username || !email || !birthdate || !passwordIsValid) {
        event.preventDefault();
        alert("Please enter all fields correctly.");
        return;
    }

    event.preventDefault(); // prevent form submission

    // Pass password along with other fields
    const params = new URLSearchParams({
        username,
        email,
        birthdate,
        password
    });

    window.location.href = `results.html?${params.toString()}`;
};

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
