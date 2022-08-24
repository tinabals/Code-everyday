function buyACuteDog() {
  let name = prompt('What is your name?');
  let age = prompt('How old are you? 👀 ');
  if (age < 18) {
    alert(`oops Sorry ${name}, You are too young to Own a dog 😞`);
  } else if (age >= 18 && age <= 50) {
    alert(
      `Thank you ${name}!, for dropping by today, Your Furiend would be with you shortly😁 `
    );
  } else {
    alert(`${name}, You can't own a dog at this age🤦‍♂️!`);
  }
}

let buyDogBtn = document.querySelector('.buyDogBtn');
buyDogBtn.addEventListener('click', buyACuteDog);
