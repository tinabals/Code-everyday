let todaysDate = new Date();
console.log(todaysDate);

let milliseconds = todaysDate.getMilliseconds();
console.log(milliseconds);

let specificDay = todaysDate.getDay();
console.log(specificDay);

let year = todaysDate.getFullYear();
console.log(year);

let month = todaysDate.getMonth();
console.log(month);
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
month = months[todaysDate.getMonth()];
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let day = days[todaysDate.getDay()];

let currentDate = `Today is ${day}, ${month} ${specificDay}, ${year}`;
console.log(currentDate);

function formatDate(date) {
  return date;
}

console.log(formatDate(currentDate));
