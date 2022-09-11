// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
let button = document.querySelector('button');
button.addEventListener('click', showDegrees);

function showDegrees(event) {
  event.preventDefault();
  alert('It is 18 degrees');
  button.innerHTML = '18 degrees';
}

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
