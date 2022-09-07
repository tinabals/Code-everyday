let temperature = prompt('What is the temperature? ');

function isCold(temperature) {
  if (temperature < 10) {
    return true;
  } else {
    return false;
  }
}

if (isCold(temperature)) {
  alert('It is Cold here😰🤧');
} else {
  alert('It is hot here bruhhh👀😁!!!');
}
