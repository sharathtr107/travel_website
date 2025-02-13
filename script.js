// Wait for the DOM to be fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the form element
    const contactForm = document.querySelector("form");

    // Attach the event listener to the form's submit event
    contactForm.addEventListener("submits", function(event) {
        // Prevent the default form submission to avoid page reload
        event.preventDefault();

        // Display an alert message to confirm the message has been sent
        alert("Your message has been sent successfully!");

        // Clear the form fields
        contactForm.reset();
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Get the form and the input fields
    const form = document.getElementById('signupForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Add event listener to form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting until validation passes

        // Clear any previous error messages
        clearErrors();

        let isValid = true;

        // Validate Name (Non-empty)
        if (name.value.trim() === '') {
            showError(name, 'nameError');
            isValid = false;
        }

        // Validate Email (Basic regex for email format)
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value)) {
            showError(email, 'emailError');
            isValid = false;
        }

        // Validate Password (Non-empty)
        if (password.value.trim() === '') {
            showError(password, 'passwordError');
            isValid = false;
        }

        // Validate Confirm Password (Must match Password)
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, 'confirmPasswordError');
            isValid = false;
        }

        // If all validations pass, allow form submission
        if (isValid) {
            alert('Signup successfull!');
            // You can submit the form or handle it with AJAX, etc.

            // Clear the form fields
            form.reset();

            // Optional: Clear any previous error messages
            clearErrors();
        }
    });

    // Show error message for invalid input
    function showError(input, errorId) {
        input.classList.add('is-invalid');
        document.getElementById(errorId).style.display = 'block';
    }

    // Clear all error messages
    function clearErrors() {
        name.classList.remove('is-invalid');
        email.classList.remove('is-invalid');
        password.classList.remove('is-invalid');
        confirmPassword.classList.remove('is-invalid');

        document.getElementById('nameError').style.display = 'none';
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('passwordError').style.display = 'none';
        document.getElementById('confirmPasswordError').style.display = 'none';
    }


});