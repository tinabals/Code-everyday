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

if (weather[city] != undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;

  alert(temperature + humidity);
} else {
  alert("Doesn't exist pease");
}
