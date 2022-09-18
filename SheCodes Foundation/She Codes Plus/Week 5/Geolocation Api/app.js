function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longtitude);
}

navigator.geolocation.getCurrentPosition(showPosition);
let button = document.querySelector('button');
// button.addEventListener('click', showCurrentPositiom);

// function showCurrentPositiom() {
//   let h1 = doc;
// }
