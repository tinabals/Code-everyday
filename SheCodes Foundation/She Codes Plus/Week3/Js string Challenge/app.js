let country = 'Guinea Bissau';
console.log(`From ${country} To ${country.replace(' ', '-')}`);

let city = ' Sydney   ';
console.log(`From ${city} To ${city.trim()}`);

let place = 'School';
console.log(`From ${place} To ${place.toLocaleLowerCase()}`);
let attraction = 'Opera House';
console.log(`From ${attraction} To ${attraction.toUpperCase()}`);

let sentence = `I went to visit the ${attraction} in ${city.trim()}, right next to my ${place.toLocaleLowerCase()}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);
