//getting the current date and time
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

//conversion to fahrenheit and viceversa
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
//getting the current weather function
function getCurrentWeather(response) {
  let responseData = response.data;
  let description = responseData.weather[0].description;
  let descriptionElement = document.querySelector('.description');
  descriptionElement.innerHTML = description;
  let temperature = responseData.main.temp;
  let h1 = document.querySelector('#currentTemp');
  h1.innerHTML = `${temperature}`;
  let location = document.querySelector('.heading-two');
  location.innerHTML = responseData.name;
}

//getting weather through current position
let showPositionButton = document.querySelector('.geolocation');
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  function showCurrentPosition() {
    apiKey = '2718952144ed077c12e7c160fb6fc351';
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getCurrentWeather);
  }
  showPositionButton.addEventListener('click', showCurrentPosition);
}
navigator.geolocation.getCurrentPosition(showPosition);

//getting weather through searching
let search_form = document.querySelector('#search-form');
function searchCity(event) {
  event.preventDefault();
  let search_input = document.querySelector('.search-input');
  let value = search_input.value;
  let apiKey = '2718952144ed077c12e7c160fb6fc351';
  let city = value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getCurrentWeather);
}
search_form.addEventListener('submit', searchCity);
