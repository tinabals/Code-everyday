let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let day = now.getDay();
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
day = days[day];
let todays_date = document.querySelector('#todays_date');
if (minutes <= 9) {
  todays_date.innerHTML = `${day} ${hour}:0${minutes}`;
} else {
  todays_date.innerHTML = `${day} ${hour}:${minutes}`;
}

let search_form = document.querySelector('#search-form');
search_form.addEventListener('submit', searchCity);

function searchCity(event) {
  event.preventDefault();
  let search_input = document.querySelector('.search-input');
  let value = search_input.value;
  let apiKey = 'c6afaa2c3ad098fb65625db7f7ba5be4';
  let city = value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  function getCurrentWeather(response) {
    let responseData = response.data;
    let description = responseData.weather[0].description;
    let descriptionElement = document.querySelector('.description');
    descriptionElement.innerHTML = description;
    let temperature = responseData.main.temp;
    let h1 = document.querySelector('#currentTemp');
    h1.innerHTML = `${temperature}`;
  }
  axios.get(apiUrl).then(getCurrentWeather);
  let location = document.querySelector('.heading-two');
  location.innerHTML = value.toUpperCase();
}
function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longtitude);
}

navigator.geolocation.getCurrentPosition(showPosition);
let button = document.querySelector('.geolocation');
button.addEventListener('click', showCurrentPositiom);

function showCurrentPositiom() {
  let location = document.querySelector('.heading-two');
  location.innerHTML = value.toUpperCase();
}
let fahrenheit = document.querySelector('.fahrenheit');
fahrenheit.addEventListener('click', convertToCelsius);
let currentTemp = document.querySelector('#currentTemp');
function convertToCelsius(event) {
  event.preventDefault();
  let celsiusconversion = ((currentTemp.innerHTML - 32) * 5) / 9;
  currentTemp.innerHTML = Math.round(celsiusconversion);
}
let celsius = document.querySelector('.celsius');
// currentTemp = document.querySelector('#currentTemp');
celsius.addEventListener('click', convertToFahrenheit);
function convertToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitConversion = (currentTemp.innerHTML * 9) / 5 + 32;
  currentTemp.innerHTML = Math.round(fahrenheitConversion);
}
