const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const responseJSON = await response.json();
      const data = await responseJSON;
      if (!data.redirect_url) {
        data.redirect_url ='/'
      }

      if (response.ok) {
        // If successful, redirect the browser to the page the user was going to
        document.location.replace(data.redirect_url);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const responseJSON = await response.json();
      const data = await responseJSON;
      if (!data.redirect_url) {
        data.redirect_url ='/'
      }

      if (response.ok) {
        // If successful, redirect the browser to the page the user was going to
        document.location.replace(data.redirect_url);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  