var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.ceil(randomDecimal);
  console.log(randomInteger);
  return randomInteger;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.

  // Create two six-sided dices
  var diceOne = rollDice();
  var diceTwo = rollDice();
  var totalDiceNumber = diceOne + diceTwo;
  console.log(diceOne, diceTwo);
  var myOutputValue = `You lose! You guessed ${input} and you rolled ${diceOne} and ${diceTwo}`;

  // User wins if either one of the conditions are met:
  // users guess equal to output
  // output is 11

  if (totalDiceNumber == input || totalDiceNumber == 11) {
    myOutputValue = `You won! You guessed ${input} and you rolled ${diceOne} and ${diceTwo}`;
  }

  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.

  // If user inputs chicken rice, nasi lemak, porridge, Change the myOutputValue to Rice
  var myOutputValue = "I dont know!";
  if (input == "chicken rice" || input == "nasi lemak" || input == "porridge") {
    myOutputValue = "This is rice!";
  }
  // If user inputs hokkien mee, laksa, mee rebus, change the myOutputValue to Noodles
  if (input == "hokkien mee" || input == "laksa" || input == "mee rebus") {
    myOutputValue = "This is noodles!";
  }
  // If user inputs roti prata, bak kut teh, fried oyster,change the myOutputValue to Others
  if (
    input == "roti prata" ||
    input == "bak kut teh" ||
    input == "fried oyster"
  ) {
    myOutputValue = "Others!";
  }

  return myOutputValue;
};

// Generate random integer from 0 to 9
var randomNumber = function () {
  var randomDecimal = Math.random() * 10;
  var randomInteger = Math.ceil(randomDecimal) - 1;
  console.log(randomInteger);
  return randomInteger;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.

  var numberOne = randomNumber();
  var numberTwo = randomNumber();
  var numberThree = randomNumber();
  var numberFour = randomNumber();

  var myOutputValue = `You lost! The numbers for today are ${numberOne}${numberTwo}${numberThree}${numberFour}!`;

  // If user guess equals to any one of the 4 numbers, user wins

  if (
    input == numberOne ||
    input == numberTwo ||
    input == numberThree ||
    input == numberFour
  ) {
    myOutputValue = `You won! The numbers for today are ${numberOne}${numberTwo}${numberThree}${numberFour}!`;
  }

  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.

  // Generate random number between 1 to 6s
  var rollFood = function () {
    var randomDecimal = Math.random() * 6;
    var randomInteger = Math.ceil(randomDecimal);
    return randomInteger;
  };

  // Generate what uncle is cooking
  var uncleCooking = rollFood();

  // Pair the number to the dish that the uncle is cooking
  if (uncleCooking == 1) {
    uncleCooking = "chicken rice";
  }

  if (uncleCooking == 2) {
    uncleCooking = "roti prata";
  }

  if (uncleCooking == 3) {
    uncleCooking = "nasi lemak";
  }

  if (uncleCooking == 4) {
    uncleCooking = "hokkien mee";
  }

  if (uncleCooking == 5) {
    uncleCooking = "bak kut teh";
  }

  if (uncleCooking == 6) {
    uncleCooking = "laksa";
  }
  console.log(uncleCooking);
  // If input equals to uncle's cooking, user wins, else user lose

  if (input == uncleCooking) {
    var myOutputValue = `You win! Uncle Cooked ${uncleCooking}`;
  } else {
    myOutputValue = `You lose! Uncle Cooked ${uncleCooking}`;
  }
  // If guests guess uncle's cooking correctly, e win

  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
