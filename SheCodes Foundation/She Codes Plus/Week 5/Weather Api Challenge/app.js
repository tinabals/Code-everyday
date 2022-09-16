let apiKey = 'c6afaa2c3ad098fb65625db7f7ba5be4';
let city = 'Sydney';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function getCurrentWeather(response) {
  let responseData = response.data;
  console.log(`The Current temperature in Sydney is ${responseData.main.temp}`);
  let temperature = responseData.main.temp;
  let h1 = document.querySelector('#heading');
  h1.innerHTML = `It is ${temperature}<small><sup>o</sup></small>C in ${city} `;
}
axios.get(apiUrl).then(getCurrentWeather);
