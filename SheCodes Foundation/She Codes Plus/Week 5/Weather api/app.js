let apiKey = 'c6afaa2c3ad098fb65625db7f7ba5be4';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New York';
888;

function getWeather(res) {
  let data = res.data;
  console.log(data);
  return data;
}
axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeather);
