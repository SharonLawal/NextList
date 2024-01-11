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
    container.classList.add('active');
});

// Event listener for login button in the form
loginbtn.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

// Event listener for close icon
closeIcon.addEventListener('click', () => {
    container.classList.add('active-popup');
    // Redirect to Home.html when the close icon is clicked
    window.location.href = 'Home.html';
});

// Prevent default form submission and hide the form when registering
document.querySelector('.form.register form').addEventListener('submit', function(event) {
    event.preventDefault();
    container.classList.remove('active');
});

// Prevent default form submission and redirect to Home.html when logging in
document.querySelector('.form.login form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'Home.html';
});

// Additional logic for login link
login.addEventListener('click', () => {
    // Check if the container is not already active
    if (!container.classList.contains('active')) {
        container.classList.add('active');
    }
});

// Additional logic for login button in the header
loginbtn.addEventListener('click', () => {
    // Check if the container is not in the popup state
    if (!container.classList.contains('active-popup')) {
        container.classList.remove('active-popup');
    }
});

// Additional logic for the register button in the form
document.querySelector('.submitbtn.register').addEventListener('click', function () {
    container.classList.add('active');
});

// Additional logic for the login button in the form
document.querySelector('.submitbtn.login').addEventListener('click', function () {
    // Redirect to Home.html when the login button is clicked
    window.location.href = 'Home.html';
});

// Additional logic for the login link in the register form
document.querySelector('.form.register .loginlink').addEventListener('click', function () {
    // Hide the register form and show the login form
    container.classList.remove('active');
});
