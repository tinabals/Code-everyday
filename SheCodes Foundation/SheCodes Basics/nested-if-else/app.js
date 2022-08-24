let hour = prompt('What is the current Hour?');

if (hour < 12) {
  alert('Good Morning');
} else if (hour <= 18 && hour > 12) {
  alert('Good Afternoon');
} else {
  alert('Good Evening');
}