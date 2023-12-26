// Form Validation 
let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  document.getElementById("form").reset();
  document.getElementById("popup").style.display = "block";
  // alert("thank you");
});
// const thankYou = document.getElementById('thank-you');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // Perform any form submission processing here

//   // Hide the form
//   form.style.display = 'none';

//   // Show the Thank You message
//   thankYou.style.display = 'block';
// });
const signupFormContainer = document.getElementById("signupFormContainer");
const loginFormContainer = document.getElementById("loginFormContainer");
const showSignupFormButton = document.getElementById("showSignupForm");
const showLoginFormButton = document.getElementById("showLoginForm")
const showSignupFormLink = document.getElementById("showSignupFormLink");
const showLoginFormLink = document.getElementById("showLoginFormLink");

// showing and hiding the login and signup forms
const showLoginForm = document.getElementById('showLoginForm');
const loginContainer = document.getElementById('login-container');

showLoginForm.addEventListener('click', function() {
  loginContainer.style.display = 'flex';
});

const showSignupForm = document.getElementById('showSignupForm');
const signupcontainer = document.getElementById('signup-container');

showSignupForm.addEventListener('click', function() {
  signupcontainer.style.display = 'flex';
});



// Add an event listener to the "Sign up" button
showSignupFormButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  signupFormContainer.style.display = "block";
  loginFormContainer.style.display = "none";
});

// Add an event listener to the "Log in" button
showLoginFormButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Show the login form and hide the signup form
  loginFormContainer.style.display = "block";
  signupFormContainer.style.display = "none";
});



// Get the "Cut button" from forms
const signupCutButton = document.getElementById('signupCutButton');
const loginCutButton = document.getElementById('loginCutButton');


// Event listeners for cut buttons
signupCutButton.addEventListener('click', closeSignupForm);
loginCutButton.addEventListener('click', closeLoginForm);
 // Function to close the Sign up form
function closeSignupForm() {
 signupFormContainer.style.display = 'none';
 signupcontainer.style.display = 'none';
}

 // Function to close the Log in form
function closeLoginForm() {
 loginFormContainer.style.display = 'none';
 loginContainer.style.display = 'none';
}

 
// Add an event listener to the "Sign up for free" link
showSignupFormLink.addEventListener("click", function(event) {
  // Prevent the default link navigation behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  signupFormContainer.style.display = "block";
  loginFormContainer.style.display = "none";

  loginContainer.style.display = 'none';
  signupcontainer.style.display = 'block';
});

// Add an event listener to the "Log in" link
showLoginFormLink.addEventListener("click", function(event) {
  // Prevent the default link navigation behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  loginFormContainer.style.display = "block";
  signupFormContainer.style.display = "none";

  loginContainer.style.display = 'block';
  signupcontainer.style.display = 'none';
});

