// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   'san francisco': {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// // write your code here
// let city = prompt('Enter a city');
// city = city.toLowerCase();
// console.log(city, 'this is the city');

// if (weather[city] != undefined) {
//   let temperature = weather[city].temp;
//   let tempInFarenheit = (temperature * 9) / 5 + 32;
//   let humidity = weather[city].humidity;

//   alert(
//     `It is currently ${temperature}°C (${tempInFarenheit}°F) in Paris with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney.`
//   );
// }

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
console.log(minutes);
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

//wather api implementation
let apiKey = 'c6afaa2c3ad098fb65625db7f7ba5be4';
let city = '';

let search_form = document.querySelector('#search-form');
function getCurrentWeather(response) {
  let responseData = response.data;
  console.log(`The Current temperature in Sydney is ${responseData.main.temp}`);
  let temperature = responseData.main.temp;
  // let h1 = document.querySelector('#heading');
  // h1.innerHTML = `It is ${temperature}<small><sup>o</sup></small>C in ${city} `;
}

function searchCity(event) {
  event.preventDefault();
  let search_input = document.querySelector('.search-input');
  let value = search_input.value;
  if (value) {
    let search_display = document.querySelector('.search-display');
    search_display.innerHTML = `Searching for ${search_input.value}`;
    search_input.value = ' ';
  }
  let location = document.querySelector('.heading-two');
  location.innerHTML = value.toUpperCase();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getCurrentWeather);
}
search_form.addEventListener('submit', searchCity);

// let fahrenheit = document.querySelector('.fahrenheit');
// fahrenheit.addEventListener('click', convertToCelsius);
// let currentTemp = document.querySelector('#currentTemp');
// function convertToCelsius(event) {
//   event.preventDefault();
//   let celsiusconversion = ((currentTemp.innerHTML - 32) * 5) / 9;
//   currentTemp.innerHTML = Math.floor(celsiusconversion);
// }
// let celsius = document.querySelector('.celsius');
// // currentTemp = document.querySelector('#currentTemp');
// celsius.addEventListener('click', convertToFahrenheit);
// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let fahrenheitConversion = (currentTemp.innerHTML * 9) / 5 + 32;
//   currentTemp.innerHTML = Math.floor(fahrenheitConversion);
// }
