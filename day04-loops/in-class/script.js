var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  // Initialize the row counter
  var rowCounter = 0;

  // Each time the loop runs, it will add one thumbs up emoji

  while (rowCounter < input) {
    myOutputValue += "👍";
    // After the loop runs, increase rowCounter by 1;
    rowCounter += 1;
  }
  return myOutputValue;
};
var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";
  // Initialize the row counter
  var rowCounter = 0;
  // Each time the outer loop runs, the inner loop runs repeatedly until the inner loop condition is met

  while (rowCounter < input) {
    // Initialize the column counter
    var columnCounter = 0;

    while (columnCounter < input) {
      myOutputValue += `👍`;
      columnCounter += 1;
    }
    myOutputValue += `<br>`;
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.

  var myOutputValue = "";
  // Initialize the row counter
  var rowCounter = 0;
  // Each time the outer loop runs, the inner loop runs repeatedly until the inner loop condition is met

  while (rowCounter < input) {
    // Initialize the column counter
    var columnCounter = 0;

    while (columnCounter <= rowCounter) {
      myOutputValue += `👍`;
      columnCounter += 1;
    }
    myOutputValue += `<br>`;
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";
  var rowCounter = 0;

  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      if (
        rowCounter == 0 ||
        rowCounter == input - 1 ||
        columnCounter == 0 ||
        columnCounter == input - 1
      ) {
        myOutputValue += `🔴`;
      } else {
        myOutputValue += "🟢";
      }

      columnCounter += 1;
    }
    myOutputValue += `<br>`;
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var sideLength = Number(input);
  var myOutputValue = "";
  // Reject input that is not odd, because square with even sides cannot have a centre character
  if (sideLength % 2 != 1) {
    return `Please enter an odd number`;
  }
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;

    while (innerCounter < sideLength) {
      var halfSideLength = Math.floor(sideLength / 2);

      // If current iteration represents a border element, draw `🔴` instead.
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 ||
        innerCounter == sideLength - 1
      ) {
        myOutputValue += `🔴`;
      }
      // If current iteration represents a middle element, draw `🟢` instead
      else if (
        outerCounter == halfSideLength &&
        innerCounter == halfSideLength
      ) {
        myOutputValue += `🟢`;
      } else {
        myOutputValue += `🟡`;
      }
      innerCounter += 1;
    }
    myOutputValue += `<br>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

// Create a function that rolls dice

// Base: Multi-Dice Game

//Declare game mode constant variables

const gameModeEnterDice = "enter number of dice";
const gameModeEnterGuess = "enter guess";

// Initialise game mode to enter number of dice mode

var currentGameMode = gameModeEnterDice;

// Keep track of variables needed for a single round

var diceRolls = [];
var didUserWin = false;
var numDice = 0;

// Keep track of variables needed across multiple rounds

var numRoundsPlayed = 0;
var numWins = 0;

// Create a function to generate a random dice number from 1 to 6.

var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var multiDiceBaseMain = function (input) {
  if (currentGameMode == gameModeEnterDice) {
    numDice = Number(input);
    currentGameMode = gameModeMultiRoundEnterGuess;
    console.log("Your current game mode is ", currentGameMode);
    return `You have chosen to roll ${numDice} dices. Please enter a single guess for all of these dice.`;
  }

  // The following code assumes enter guess game mode because we return at the end of the previous if statement

  var userGuess = Number(input);
  // Initiate diceRolls array to store dice rolls for this round
  diceRolls = [];

  // Initialise didUserWin to false for this round
  didUserWin = false;

  // Increment number of games the user has played for win loss record
  numRoundsPlayed += 1;

  // Roll numDice dices
  for (var counter = 0; counter < numDice; counter += 1) {
    var diceRoll = rollDice();
    // Store the current dice roll in diceRolls to show the user later
    diceRolls.push(diceRoll);
    // If dice roll matches user guess, store that user has won
    if (diceRoll == userGuess) {
      didUserWin = true;
    }
  }
  // Increment win counter if user has won
  if (didUserWin) {
    numWins += 1;
  }

  // After the round is over, reset mode to enter num dice so user can play again.
  currentGameMode = gameModeEnterDice;

  // Save generic output for both win and loss conditions to avoid repeating code.

  var numLosses = numRoundsPlayed - numWins;
  var genericOutputPrefix = `You guessed ${userGuess} and the computer rolled ${diceRolls}.`;
  var genericOutputSuffix = `Your win-loss record is ${numWins}-${numLosses}. <br><br> Please input the number of dice you want to roll next round.`;

  if (didUserWin) {
    return `${genericOutputPrefix} You win! ${genericOutputSuffix}`;
  }
  // if user has not won, output lose message
  return `${genericOutputPrefix} You lose. ${genericOutputSuffix}`;
};

// Declare the constants game mode

const gameModeMultiRoundEnterNumDice = "multi round enter number of dice";
const gameModeMultiRoundEnterGuess = "multi round enter guess";

// Initialize game mode to multi round enter number of dice

currentGameMode = gameModeMultiRoundEnterNumDice;

// Keep track of variables needed for a single round

var diceRolls = [];
var hasUserWon = false;
var numDice = 0;

// Keep track of variables across multiple rounds
var numGamesPlayed = 0;
var numWon = 0;

var multiDiceMultiRoundMain = function (input) {
  if (currentGameMode == gameModeMultiRoundEnterNumDice) {
    numDice = input;
    currentGameMode = gameModeMultiRoundEnterGuess;
    console.log("your current game mode is ", currentGameMode);
    return `You have chosen to roll ${numDice} dices. Now, please enter the number that you think the computer will roll `;
  }

  // assuming that user has entered the number of dices to roll, the game mode changed to enter guess.

  var userGuess = input;

  // Store all dice rolls for each round so that user can see how they won or lost

  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  for (var numRounds = 4; roundCounter < numRounds; roundCounter += 1) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to be false this round
    hasUserWon = false;
    // Increment the number of rounds the user has played for win loss record
    numRoundsPlayed += 1;
    // Roll numDice dices.
    for (var diceCounter = 0; diceCounter < numDice; diceCounter += 1) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      if (userGuess == diceRoll) {
        hasUserWon = true;
      }
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);

    if (hasUserWon == true) {
      numWon += 1;
    }
  }
  currentGameMode = gameModeMultiRoundEnterNumDice;

  // Save the generic output for both win and losses so that you don't have to repeat the codes

  var numLost = numRoundsPlayed - numWon;
  var generateOutputPrefix = `You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(
    `|`
  )}.<br><br>`;
  var generateOutputSuffix = `Your current win-loss record is ${numWon}-${numLost}. <br><br> Please enter a number of dice to roll to start again.`;
  if ((didUserWin = true)) {
    return `${generateOutputPrefix} You won! <br> <br> ${generateOutputSuffix}`;
  }
  return `${generateOutputPrefix} You lost! <br> <br> ${generateOutputSuffix}`;
};

/**
 * More Comfortable: Two Player Multi-Round Multi-Dice Game
 */

// Define the game modes as constants

const gameModeTwoPlayerMultiRoundEnterNumDice = "enter number of dice";
const gameModeTwoPlayerMultiRoundEnterGuess = "enter guess";

// Initialize game mode to be enter number of dice

var currentGameMode = gameModeTwoPlayerMultiRoundEnterGuess;

// Define the variables to be kept tracked in a single round

// The dice rolled
var diceRolls = [];
// Whether player has won the game or not
var hasUserWon = false;
// How many dice player chooses to roll?
var numDice = 0;

// Define the variables to be kept tracked across multiple rounds,

// Set the default starting with player 1
var currPlayer = 1;
var player1NumRoundsPlayed = 0;
var player1NumWins = 0;
var player2NumRoundsPlayed = 0;
var player2NumWins = 0;

// Write a function that generates a random dice roll from 1-6.
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

// Generate a helper function to increment the number of rounds played
var incrementNumRoundsPlayed = function () {
  if (currPlayer == 1) {
    player1NumRoundsPlayed += 1;
  } else {
    player2NumRoundsPlayed += 1;
  }
};

// Generate a helper function to increment the number of wins
var incrementNumWins = function () {
  if (currPlayer == 1) {
    player1NumWins += 1;
  } else {
    player2NumWins += 1;
  }
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.

  if (currentGameMode == gameModeTwoPlayerMultiRoundEnterGuess) {
    numDice = Number(input);
    currentGameMode = gameModeTwoPlayerMultiRoundEnterNumDice;
    return `Player ${currPlayer}: You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }

  // The following code assumes two player multi round enter guess mode because we return at the end of the previous if statement

  var userGuess = Number(input);

  // Store all dice rolls for each round so that user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess

  var numRounds = 4;
  for (var roundCounter = 0; roundCounter < numRounds; roundCounter += 1) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win-loss record
    incrementNumRoundsPlayed();

    // Roll numDice number of dice
    for (var diceCounter = 0; diceCounter < numDice; diceCounter += 1) {
      var diceRoll = rollDice();
      diceRolls.push(diceRoll);
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);

    // Increment win counter if user has won
    if (hasUserWon) {
      incrementNumWins();
    }
  }

  // After numRounds, reset mode to enter num dice so user can play again.

  currentGameMode = gameModeTwoPlayerMultiRoundEnterGuess;

  // OUtput result and win-loss record.

  var player1NumLosses = player1NumRoundsPlayed - player1NumWins;
  var player2NumLosses = player2NumRoundsPlayed - player2NumWins;
  // If currPlayer is 1, nextPlayer is 2. If currPlayer is 2, nextPlayer is 1.
  var nextPlayer = (currPlayer % 2) + 1;

  //.join converts an array to a string where each element is separated by the param to .join.
  var generateOutputPrefix = `Player ${currPlayer}: you guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(
    `|`
  )}.}`;
  var generateWinLossRecord = `Player 1 win-loss record is ${player1NumWins}-${player1NumLosses}.<br><br> Player 2 win-loss record is ${player2NumWins}-${player2NumLosses}. <br><br> Player ${nextPlayer}: Please enter a number of dice to roll for your turn`;

  // Update currPlayer to nextPlayer before next turn

  currPlayer = nextPlayer;

  return `${generateOutputPrefix} <br><br> ${generateWinLossRecord}.`;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
