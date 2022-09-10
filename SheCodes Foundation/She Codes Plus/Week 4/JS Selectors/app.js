// Challenge 1
// Log li with id special
let idSpecial = document.querySelector('#special');
console.log(idSpecial);

// Challenge 2
// Log all li with class of country
let allClassCountry = document.querySelectorAll('.country');
console.log(allClassCountry);

// Challenge 3
// Add class special to the li with id special
idSpecial.classList.add('.special');
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
idSpecial.innerHTML = 'Nigeria';
