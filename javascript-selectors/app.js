function contactUs() {
  let name = prompt('What is your Name ? ');
  let email = prompt('What is your Email Address?');
  let h1 = document.querySelector('h1');
  h1.innerHTML = 'Thank you ' + name + ", we'll be in touch!";
}
let contactButton = document.querySelector('button');
contactButton.addEventListener('click', contactUs);
