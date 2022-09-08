let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
let month = months[now.getMonth()];
let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
let day = days[now.getDay()];
let h2 = document.querySelector('h2');
h2.innerHTML = `${day}  ${month} ${date}, ${hours}:${minutes}, ${year}   `;
