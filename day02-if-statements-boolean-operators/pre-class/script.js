// create a function that takes in number of expected guests for a party and outputs the number of oranges required to make enough orange juice for all guests

var orangeJuiceMainOne = function (numGuests) {
  var numOrangesPerGlass = 4;
  var numGlassesPerGuest = 2;
  var NumOrangesRequired = numOrangesPerGlass * numGlassesPerGuest * numGuests;

  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var myOutputValue = `You will need ${NumOrangesRequired} oranges to serve ${numGuests} guests.`;
  return myOutputValue;
};

// Create a function that takes in number of guests and number of glasses per guest as input, and produce the same output: orange required

var orangeJuiceMain = function (numGuests, numGlassPerGuest) {
  var numOrangesPerGlass = 4;
  var numOrangeNeeded = numOrangesPerGlass * numGlassPerGuest * numGuests;

  var myOutputValue = `You will need ${numOrangeNeeded} to serve ${numGuests} guests, who each drinks ${numGlassPerGuest} glasses.`;

  return myOutputValue;
};

// House Paint (Functions II)

// Helper Functions
// Create a function to calculate room area
var calcRoomArea = function (length, breadth) {
  return length * breadth;
};

// Define a function where user inputs a dollar amount of pain per litre and will get the total cost price of painting the home interior as an output

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  var numRooms = 6;
  var numCoatsOfPaint = 2;
  var roomLength = 3;
  var roomBreadth = 3;
  var areaCoveredPerLitreOfPaint = 300;
  var totalAreaToBePainted =
    calcRoomArea(roomLength, roomBreadth) * numRooms * numCoatsOfPaint;
  var numLiterPaintRequired = totalAreaToBePainted / areaCoveredPerLitreOfPaint;
  var totalCost = numLiterPaintRequired * input;
  var myOutputValue = `It would cost a total of $${totalCost} to paint the interior of the house, considering the cost of paint to be $${input} per liter.`;
  return myOutputValue;
};

var paintMainTwoInputs = function (costPerLiter, numRooms, numCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  var roomLength = 3;
  var roomBreadth = 3;
  var areaCoveredPerLitreOfPaint = 300;
  var totalAreaToBePainted =
    calcRoomArea(roomLength, roomBreadth) * numRooms * numCoats;
  var numLiterPaintRequired = totalAreaToBePainted / areaCoveredPerLitreOfPaint;
  var totalCost = numLiterPaintRequired * costPerLiter;
  var myOutputValue = `It would cost a total of $${totalCost} to paint the interior of the house, considering the cost of paint to be $${costPerLiter} per liter.`;
  return myOutputValue;
};

//helper functions to generate a random integer from 1 to 6

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDiceNumber = diceRoll();

  var myOutputValue = `Howdy! You just rolled a ${randomDiceNumber}`;
  return myOutputValue;
};

var secretPhraseMainPalatablePapaya = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.

  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input != "palatable papaya") {
    myOutputValue = "the door shall not open!";
  } else {
    myOutputValue = "you wrote the secret phrase!";
  }
  // return myOutputValue as output
  return myOutputValue;
};

// Secret Words

var secretPhraseMain = function (input) {
  var myOutputValue = `hello world`;

  //if user inputs either of the following secret phrases, value of myOutputValue changes to Congratulations! You've unlocked the secret mission.

  if (
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings" ||
    input == "palatable papaya"
  ) {
    myOutputValue = `You've unlocked the secret mission!`;
  }
  return myOutputValue;
};

//Dice Game Two Differences
var diceGameMainTwoDifferencesPalatablePapaya = function (input) {
  var randomDiceNumber = diceRoll();
  var difference = input - randomDiceNumber;
  console.log(randomDiceNumber);
  console.log(difference);

  var myOutputValue = `You Lost! You guessed ${input} and you rolled ${randomDiceNumber}.`;

  //users win if the following are true:
  //users' guess equals the dice roll
  //users' guess is off by 2

  if (Math.abs(difference) <= 2 || input == "palatable papaya") {
    myOutputValue = `You won! You guessed ${input} and you rolled ${randomDiceNumber}!`;
  }
  return myOutputValue;
};

//Dice Game One Difference
var diceGameMainOneDifference = function (input) {
  // Define a variable that calls the diceRoll function to give a random nice number
  var randomDiceNumber = diceRoll();
  console.log(randomDiceNumber);
  //Define a default outcome when users guess incorrectly
  var myOutputValue = `You Lost! You guessed {input} and you rolled ${randomDiceNumber}`;

  //User wins if the following are true:
  //Users' guess equals the dice roll
  //Users' guess plus one equals the dice roll
  //Users' guess minus one equals the dice roll

  if (
    input == randomDiceNumber ||
    input == randomDiceNumber + 1 ||
    input == randomDiceNumber - 1
  ) {
    myOutputValue = `Congratulations! You guessed ${input} and you rolled ${randomDiceNumber}`;
  }
  return myOutputValue;
};
//easiest dice game
var diceGameMainEqual = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = diceRoll();
  var myOutputValue = `You lost! you rolled ${randomDiceNumber}`;

  if (input == randomDiceNumber) {
    myOutputValue = `Congratulations! You rolled ${randomDiceNumber}`;
  }

  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = diceRoll();
  var myOutputValue = `You lost! you rolled ${randomDiceNumber}`;

  if (2 * input == randomDiceNumber) {
    myOutputValue = `Congratulations! You rolled ${randomDiceNumber}`;
  }
  return myOutputValue;
};
