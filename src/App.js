// App.js

document.addEventListener('DOMContentLoaded', function() {
  // Selecting the login and register forms from the DOM
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Adding event listener for login form submission
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Extracting values from login form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Simulating login logic (replace with actual login logic)
    console.log('Login submitted with:');
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form after submission (optional)
    loginForm.reset();
  });

  // Adding event listener for register form submission
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Extracting values from register form fields
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    // Simulating registration logic (replace with actual registration logic)
    console.log('Registration submitted with:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form after submission (optional)
    registerForm.reset();
  });
});
