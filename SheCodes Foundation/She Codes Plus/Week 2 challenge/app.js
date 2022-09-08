let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  'san francisco': {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt('Enter a city');
city = city.toLowerCase();
console.log(city, 'this is the city');

if (weather[city] != undefined) {
  let temperature = weather[city].temp;
  let tempInFarenheit = (temperature * 9) / 5 + 32;
  let humidity = weather[city].humidity;
  console.log(tempInFarenheit, 'temperature');

  alert(
    `It is currently ${temperature}°C (${tempInFarenheit}°F) in Paris with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney.`
  );
}
