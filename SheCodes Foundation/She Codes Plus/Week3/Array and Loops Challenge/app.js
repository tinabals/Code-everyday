// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
console.log(daysOfTheWeek);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(
  `${daysOfTheWeek[0]} and ${daysOfTheWeek[daysOfTheWeek.length - 1]}`
);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
daysOfTheWeek[4] = 'Funday';
// Log the array
// console.log(daysOfTheWeek);

// Challenge 4
// Remove Monday and Tuesday

// let removeDaysOfTheWeek = daysOfTheWeek.splice(2, 5);
daysOfTheWeek.shift();
daysOfTheWeek.shift();
// // Log the array
console.log(daysOfTheWeek);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

console.log(daysOfTheWeek);
function varyingTemps(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}

daysOfTheWeek.forEach(varyingTemps);
