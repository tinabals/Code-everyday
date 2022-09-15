let apiKey = 'c6afaa2c3ad098fb65625db7f7ba5be4';
let city = 'paris';

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
888;

function getWeather(res) {
  let data = res.data;
  console.log(data);
  let temperature = document.querySelector('#temperature');
  temperature.innerHTML = `${data.main.temp}<small><sup>o</sup></small>C`;

  console.log(data.weather[0].main);
  let description = document.querySelector('.description');
  description.innerHTML = data.weather[0].description;
  console.log(data.weather[0].description);
}
let h1 = document.querySelector('#city h1');
h1.innerHTML = city;
axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeather);
