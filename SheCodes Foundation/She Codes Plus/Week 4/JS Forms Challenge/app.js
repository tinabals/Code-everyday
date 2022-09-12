let specialButton = document.querySelector('#special-button');
specialButton.addEventListener('click', greetings);
function greetings() {
  alert('Hooray!');
}

let form_one = document.querySelector('#password-form');
form_one.addEventListener('submit', submitFormOne);
function submitFormOne(event) {
  event.preventDefault();
  let passwordInput = document.querySelector('#password-input');
  let passwordInputValue = passwordInput.value;
  alert(passwordInputValue);
}

let form_two = document.querySelector('#signup-form');
form_two.addEventListener('submit', submitFormTwo);

function submitFormTwo(event) {
  event.preventDefault();
  let email = document.querySelector('#email-input');

  let username = document.querySelector('#username-input');
  alert(`Hello ${username.value} with the email ${email.value}`);
}
