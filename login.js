document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("remember-me");

    // Check if user data exists in localStorage
    if (localStorage.getItem("rememberedEmail")) {
        emailInput.value = localStorage.getItem("rememberedEmail");
        rememberMeCheckbox.checked = true;
    }

    if (localStorage.getItem("rememberedPassword")) {
        passwordInput.value = localStorage.getItem("rememberedPassword");
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if fields are empty
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation (Minimum 8 characters, at least one letter and one number)
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one letter and one number.");
            return;
        }

        alert("Login successful!");
    });
});
