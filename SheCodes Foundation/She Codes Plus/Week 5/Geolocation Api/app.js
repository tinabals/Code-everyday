function showPosition(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(showPosition);
