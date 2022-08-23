function applyNow() {
    let firstName = prompt('What is your first name?');
    let age = prompt('How old are you?');
    let h1 = document.querySelector('h1');

    if (age >= 18) {
      h1.innerHTML = 'Hi, ' + firstName + '! Welcome to SheCodes !';
    } else {
      h1.innerHTML = 'Sorry, ' + firstName + '! You cannot join SheCodes';
    }
  }
  let button = document.querySelector('button');
  button.addEventListener('click', applyNow);