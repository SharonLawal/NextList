const container = document.querySelector('.container');
const login = document.querySelector('.loginlink');
const register = document.querySelector('.registerlink');
const loginbtn = document.querySelector('.loginbtn');
const closeIcon = document.querySelector('.closeIcon');

// Event listener for register link
register.addEventListener('click', () => {
    container.classList.add('active');
});

// Event listener for login link
login.addEventListener('click', () => {
    container.classList.add('active-popup');
});

// Event listener for login button in the form
loginbtn.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

// Event listener for close icon
closeIcon.addEventListener('click', () => {
    container.classList.remove('active-popup');
    // Redirect to Home.html when the close icon is clicked
    window.location.href = 'Home.html';
});

// Prevent default form submission and hide the form when registering
document.querySelector('.form.register form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate form fields
    const usernameInput = document.querySelector('.form.register input[type="text"]');
    const emailInput = document.querySelector('.form.register input[type="email"]');
    const passwordInput = document.querySelector('.form.register input[type="password"]');
    const termsCheckbox = document.querySelector('.form.register input[type="checkbox"]');
    const errorContainer = document.querySelector('.form.register .error-message');

    if (validateInput(usernameInput) && validateInput(emailInput) && validateInput(passwordInput) && termsCheckbox.checked) {
        // Proceed to the login form
        container.classList.remove('active');
    } else {
        // Display an error message
        errorContainer.textContent = 'Please fill in all fields and accept the terms and conditions.';
    }
});

// Function to validate input fields
function validateInput(input) {
    return input.value.trim() !== '';
}

// Clear error message when any input field is focused
document.querySelectorAll('.form.register input').forEach(input => {
    input.addEventListener('focus', () => {
        document.querySelector('.form.register .error-message').textContent = '';
    });
});

// Prevent default form submission and redirect to Home.html when logging in
document.querySelector('.form.login form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'Home.html';
});

// Additional logic for the login link in the register form
document.querySelector('.form.register .loginlink').addEventListener('click', function () {
    // Hide the register form and show the login form
    window.location.href = 'Login.html';
});

// Additional logic for the login button in the header
loginbtn.addEventListener('click', () => {
    // Check if the container is not in the popup state
    if (!container.classList.contains('active-popup')) {
        container.classList.add('active-popup');
    }
});
