//global scope
var globalVariable = 0;
var prevDiceRoll = 0;
// Track the number of games played
var numGamesPlayed = 0;
// Track the number of games won
var numGamesWon = 0;
var numPoints = 0;

// Track the frequency of the value of the dice roll.
var diceVal1Freq = 0;
var diceVal2Freq = 0;
var diceVal3Freq = 0;
var diceVal4Freq = 0;
var diceVal5Freq = 0;
var diceVal6Freq = 0;

//also global scope
var introScopeMain = function (input) {
  //function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  //we can manipulate the value of a global variable
  //without having to re-declare using the var keyword:
  let addifier = 2;
  globalVariable += addifier;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    //block scope
    //we can access both myOutputValue and globalVariable within block scope

    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }

  return myOutputValue;
};

var diceRoll = function () {
  // Generate a random number from 1 to 6
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.ceil(randomDecimal);
  return randomInteger;
};

var getPrevDiceRollInfo = function () {
  //handle the scenario where this is the first roll and hence there isn't a previous roll value.
  if (prevDiceRoll == 0) {
    return `This was your first roll.`;
  }
  return `Your previous roll was ${prevDiceRoll}.`;
};

var getWinRateInfo = function () {
  var winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
  return `You win ` + winRate + `% of the time.`;
};

var incrDiceValFreq = function (diceVal) {
  if (diceVal == 1) {
    diceVal1Freq += 1;
  } else if (diceVal == 2) {
    diceVal2Freq += 1;
  } else if (diceVal == 3) {
    diceVal3Freq += 1;
  } else if (diceVal == 4) {
    diceVal4Freq += 1;
  } else if (diceVal == 5) {
    diceVal5Freq += 1;
  } else if (diceVal == 6) {
    diceVal6Freq += 1;
  }
};

// Set a function that returns information about the most rolled dice value

var getMostFreqRolled = function () {
  if (
    diceVal1Freq > diceVal2Freq &&
    diceVal1Freq > diceVal3Freq &&
    diceVal1Freq > diceVal4Freq &&
    diceVal1Freq > diceVal5Freq &&
    diceVal1Freq > diceVal6Freq
  ) {
    return "You roll 1 most often";
  } else if (
    diceVal2Freq > diceVal1Freq &&
    diceVal2Freq > diceVal3Freq &&
    diceVal2Freq > diceVal4Freq &&
    diceVal2Freq > diceVal5Freq &&
    diceVal2Freq > diceVal6Freq
  ) {
    return "You roll 2 most often";
  } else if (
    diceVal3Freq > diceVal1Freq &&
    diceVal3Freq > diceVal2Freq &&
    diceVal3Freq > diceVal4Freq &&
    diceVal3Freq > diceVal5Freq &&
    diceVal3Freq > diceVal6Freq
  ) {
    return "You roll 3 most often";
  } else if (
    diceVal4Freq > diceVal1Freq &&
    diceVal4Freq > diceVal2Freq &&
    diceVal4Freq > diceVal3Freq &&
    diceVal4Freq > diceVal5Freq &&
    diceVal4Freq > diceVal6Freq
  ) {
    return "You roll 4 most often";
  } else if (
    diceVal5Freq > diceVal1Freq &&
    diceVal5Freq > diceVal2Freq &&
    diceVal5Freq > diceVal3Freq &&
    diceVal5Freq > diceVal4Freq &&
    diceVal5Freq > diceVal6Freq
  ) {
    return "You roll 5 most often";
  } else if (
    diceVal6Freq > diceVal1Freq &&
    diceVal6Freq > diceVal2Freq &&
    diceVal6Freq > diceVal3Freq &&
    diceVal6Freq > diceVal4Freq &&
    diceVal6Freq > diceVal5Freq
  ) {
    return "You roll 6 most often";
  }
  // else handle scenario where there isn't a most frequently rolled dice num
  return "You don't have a most-rolled dice";
};

//declare global variable
var bankRoll = 10;

var appSetupMain = function (input) {
  var randomDiceNumber = diceRoll();
  var myOutputValue = `you lose. current bank roll ${bankRoll}`;

  //change bankRoll state if user's guess matches the random dice number

  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;
    myOutputValue = `you win. current bank roll ${bankRoll}`;
  }
  console.log(randomDiceNumber);
  console.log(bankRoll);
  return myOutputValue;
};

var lastRollMain = function (input) {
  var randomDiceNumber = diceRoll();
  var prevDiceRollInfo = getPrevDiceRollInfo();
  prevDiceRoll = randomDiceNumber;
  var myOutputValue =
    prevDiceRollInfo +
    ` You just rolled a ` +
    randomDiceNumber +
    `. You guessed ` +
    input +
    `! You Lose!`;

  //change bankRoll state if user's guess matches the random dice number
  if (randomDiceNumber == input) {
    myOutputValue =
      prevDiceRollInfo +
      ` You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `! You Win!`;
  }
  console.log(randomDiceNumber);
  console.log(bankRoll);
  return myOutputValue;
};

var winLossMain = function (input) {
  var randomDiceNumber = diceRoll();

  numGamesPlayed += 1;

  var winRateInfo = getWinRateInfo();

  // set the display message for the scenario when user doesn't win
  var myOutputValue =
    winRateInfo +
    `. You just rolled a ` +
    randomDiceNumber +
    `. You guessed ` +
    input +
    `.` +
    ` You lose.`;

  // if users' guess is the same as the dice roll, add number of games won by 1, recalculate win rate and get a new display message about the win rate

  if (randomDiceNumber == input) {
    // increase number of games won by 1
    numGamesWon += 1;
    // recalculate the win rate and get a new display message about the win rate
    winRateInfo = getWinRateInfo();

    myOutputValue =
      winRateInfo +
      `. You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `.` +
      ` You win!`;
  }
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var userGuess = Number(input);
  if (userGuess > 6 || userGuess < 1) {
    return `Please enter a number from 1 to 6.`;
  }

  var randomDiceValue = diceRoll();
  console.log(randomDiceValue);
  console.log(`1 ` + diceVal1Freq);
  console.log(`2 ` + diceVal2Freq);
  console.log(`3 ` + diceVal3Freq);
  console.log(`4 ` + diceVal4Freq);
  console.log(`5 ` + diceVal5Freq);
  console.log(`6 ` + diceVal6Freq);

  incrDiceValFreq(randomDiceValue);
  var mostFreqRolledDiceInfo = getMostFreqRolled();

  var myOutputValue = mostFreqRolledDiceInfo;
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//Global State for App Modes

// we set the initial state of mode
var currentGameMode = `waiting for user name`;
var bankRoll = 10;
var userName = "";

//get a randomised dice roll

var rollDice = function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  return diceNumber;
};

// depending on the input, we will toggle mode states between green / blue
var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.

  var myOutputValue = "";

  if (currentGameMode == `waiting for user name`) {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = `Hello ` + userName;
  } else if (currentGameMode == `dice game`) {
    //dice game logic
    var userGuess = input;
    var randomDiceRoll = rollDice();
    myOutputValue =
      userName +
      ` you lost! you guessed: ` +
      input +
      `you rolled: ` +
      randomDiceRoll +
      ` current bank roll: ` +
      bankRoll;
  }

  if (userGuess == randomDiceRoll) {
    bankRoll = bankRoll + 1;
    myOutputValue =
      userName +
      " you won! you guessed: " +
      input +
      "you rolled: " +
      randomDiceRoll +
      " your current bank roll: " +
      bankRoll;
  }

  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
