let apiKey = '2718952144ed077c12e7c160fb6fc351';

function showWeather(res) {
  console.log(res.data);
  let temperature = document.querySelector('h1');
  temperature.innerHTML = res.data.main.temp;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
navigator.geolocation.getCurrentPosition(showPosition);
