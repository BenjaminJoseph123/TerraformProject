// App.js

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Simulate login logic (replace with actual logic)
      console.log('Login submitted with:');
      console.log('Username:', username);
      console.log('Password:', password);

      // Reset the form after submission (optional)
      loginForm.reset();
  });

  registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const username = registerForm.username.value;
      const email = registerForm.email.value;
      const password = registerForm.password.value;

      // Simulate registration logic (replace with actual logic)
      console.log('Registration submitted with:');
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      // Reset the form after submission (optional)
      registerForm.reset();
  });
});













