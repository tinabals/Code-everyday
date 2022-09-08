let todaysDate = new Date();
console.log(todaysDate);

let milliseconds = todaysDate.getMilliseconds();
console.log(milliseconds);

let specificDay = todaysDate.getDay();
console.log(specificDay);

let year = todaysDate.getFullYear();
console.log(year);

function formatDate(date) {
  let specificDay = date.getDay();
  let year = date.getFullYear();
  let month = date.getMonth();
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
  month = months[date.getMonth()];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[date.getDay()];

  let currentDate = `Today is ${day}, ${month} ${specificDay}, ${year}`;
  console.log(currentDate);
  return currentDate;
}

console.log(formatDate(todaysDate));
