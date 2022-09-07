function isWindy(speed, unit) {
  if (speed > 5 && unit === 'metric') {
    return true;
  } else {
    return false;
  }
}

let speed = prompt('What is the Speed of the wind over there?');
let unit = prompt('in what unit? (Metric or Imperial) ');

if (isWindy(speed, unit)) {
  alert('It is Windy');
} else {
  alert('It is not Windy');
}
