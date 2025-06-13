document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector("form");
    
    signInForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const terms = document.getElementById("terms").checked;

        // Check if any field is empty
        if (!name || !phone || !email || !password || !dob || !gender) {
            alert("Please fill out all fields.");
            return;
        }

        // Phone number validation (10 digits)
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
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

        // Terms and conditions validation
        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        alert("Sign-in successful!");
    });
});
