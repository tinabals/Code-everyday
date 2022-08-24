function buyGreekyoghurt() {
  let name = prompt('What is your name');
  let email = prompt('What is your Email Address? ');
  let emoji = prompt('What is your favourite emoji? ');
  alert(
    `Thank you, ${name}! We'll be in touch by email, meanwhile have lot of Yoghurt! ${emoji}`
  );
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', buyGreekyoghurt);
