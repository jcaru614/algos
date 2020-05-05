var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?");
var pet = prompt("What is your pets name?")
alert("Thank you for this information");



if (firstName[0] === lastName[0]) {
  true;
} else {
  false;
};

if (age > 20 && age < 30) {
  true;
} else {
  false;
};

if (height >= 170) {
  true;
} else {
  false;
};

if (pet[pet.length-1] === "y") {
  true;
} else {
  false;
};

if (firstName && lastName && height && age && pet) {
  alert("Welcome Spy");
} else {
  alert("Nothing to see here");
};
