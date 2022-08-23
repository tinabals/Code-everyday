function updateHeading(newHeading) {
  let heading = document.querySelector('h1');
  heading.innerHTML = newHeading;
}
function applyNow() {
  let firstName = prompt('What is your first name?');
  let age = prompt('How old are you?');

  if (age >= 18) {
    updateHeading(`Hi,  ${firstName}! Welcome to SheCodes 🙎‍♀️ `);
  } else {
    updateHeading(`Sorry, ${firstName}! You cannot join SheCodes. `);
  }
}

let button = document.querySelector('button');
button.addEventListener('click', applyNow);
