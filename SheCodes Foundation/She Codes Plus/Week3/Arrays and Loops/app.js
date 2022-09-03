let cities = ['New York', 'Paris', 'Moscow', 'Sydney'];

console.log(cities[3]);

console.log(cities.length);
cities[1] = 'London';
console.log(cities);

function showCity(city) {
  console.log(city);
}
cities.forEach(showCity);

cities = document.querySelectorAll('li');
function showList(cityElement) {
  cityElement.innerHTML = '<strong>' + cityElement.innerHTML + '</strong>';
}

cities.forEach(showList);
