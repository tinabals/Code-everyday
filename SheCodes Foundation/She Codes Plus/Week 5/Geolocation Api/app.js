function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longtitude);
  function showCurrentPositiom() {
    let h1 = document.querySelector('h1');
    h1.innerHTML = position.coords.latitude;
  }
  button.addEventListener('click', showCurrentPositiom);
}

navigator.geolocation.getCurrentPosition(showPosition);
let button = document.querySelector('button');
