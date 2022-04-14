var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var guesses = [];

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  console.log("the current dice number is ", randomDiceNumber);

  if (randomDiceNumber == input) {
    return `You win! Your guesses: ${guesses}`;
  }

  return `You lose! Your guesses: ${guesses}`;

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
};
// Initialise an empty names array
var names = [];

var followArraysLoopsMain = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name exists in the name array

  for (var index = 0; index < names.length; index += 1) {
    console.log("your current index number is ", index);
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }
  // If no duplicate name was found, add the input name to the names array

  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  return `All names: ` + names;
};
