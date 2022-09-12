let form = document.querySelector('#search-city');
form.addEventListener('submit', searchCity);

function searchCity(event) {
  event.preventDefault();
  let name = document.querySelector('#name');
  let result = document.querySelector('h6');
  result.innerHTML = name.value;
}
