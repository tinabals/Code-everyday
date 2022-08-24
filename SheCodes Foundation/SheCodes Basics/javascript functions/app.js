function canSpeakPortuguese() {
  let country = prompt("What's your Country?").toLowerCase().trim();
  if (country === 'Brazil' || country === 'Portugal') {
    alert('‘You speak Portuguese’');
  } else {
    alert('‘Go learn Portuguese!’');
  }
}
canSpeakPortuguese();
