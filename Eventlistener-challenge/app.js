function updateHeading(newHeading) {
  let heading = document.querySelector('h1');
  heading.innerHTML = newHeading;
}
function canApply() {
  let age = prompt('How old are you?');
  if (age >= 18) {
    return age;
  }
}
function applyNow() {
  let firstName = prompt('What is your first name?');

  if (canApply()) {
    updateHeading(`Hi,  ${firstName}! Welcome to SheCodes 🙎‍♀️ `);
  } else {
    updateHeading(`Sorry, ${firstName}! You cannot join SheCodes. `);
  }
}

let button = document.querySelector('button');
button.addEventListener('click', applyNow);
