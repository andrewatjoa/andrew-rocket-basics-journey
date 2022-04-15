// Global Variables to set initial game states
const spsNormalMode = `sps normal mode`;
const spsReverseMode = `sps reverse mode`;
var currentGameMode = `waiting for user name`;

// Create a global variable called User Name: ask user to enter user name
var userName = ``;

var spsMode = ``;

//Track number of games played
var numGamesPlayed = 0;

//Track number of games won
var numGamesWon = 0;

var numGamesLost = 0;

var numGamesDrawn = 0;

var getWinRateInfo = function () {
  return `Your current win rate is ${Math.floor(
    (numGamesWon / numGamesPlayed) * 100
  )} %`;
};

// Since the object is always reused, it's very tedious to type and is prone to typo, can I store it as a variable?

var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var revScissors = "reversed scissors";
var revPaper = "reversed paper";
var revStone = "reversed stone";

// Create a helper function that generates "scissors" "paper" and "stone" randomly.

var genSPSRandom = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  if (randomInteger == 1) {
    return scissors;
  }
  if (randomInteger == 2) {
    return paper;
  }
  if (randomInteger == 3) {
    return stone;
  }
};

// Create a helper function that generates the emoji that symbolizes scissors, paper and stone respectively.

var genSPSEmoji = function (SPS) {
  if (SPS == scissors || SPS == revScissors) {
    return "✂️";
  }
  if (SPS == paper || SPS == revPaper) {
    return "📝";
  }

  if (SPS == stone || SPS == revStone) {
    return "💎";
  }
};

// Create helper functions that contains win, lose or draw conditions
var drawCondition = function (playerThrow, computerThrow) {
  return (
    playerThrow == computerThrow ||
    (playerThrow == revScissors && computerThrow == scissors) ||
    (playerThrow == revPaper && computerThrow == paper) ||
    (playerThrow == revStone && computerThrow == stone)
  );
};

var winConditionNormalMode = function (playerThrow, computerThrow) {
  return (
    (playerThrow == scissors && computerThrow == paper) ||
    (playerThrow == stone && computerThrow == scissors) ||
    (playerThrow == paper && computerThrow == stone)
  );
};

var winConditionReverseMode = function (playerThrow, computerThrow) {
  return (
    (playerThrow == revScissors && computerThrow == stone) |
      (playerThrow == revStone && computerThrow == paper) ||
    (playerThrow == revPaper && computerThrow == scissors)
  );
};

var genOutputPrefix = function (playerThrows, computerPlayed) {
  var playerEmoji = genSPSEmoji(playerThrows);
  var computerEmoji = genSPSEmoji(computerPlayed);
  return `${userName} threw: ${playerThrows} ${playerEmoji} <br> Computer played: ${computerPlayed} ${computerEmoji} <br><br>`;
};

var genOutputSuffix = function () {
  if (currentGameMode == spsNormalMode) {
    return `Please input scissors, paper, and stone to continue playing! <br><br>`;
  } else {
    return `Please input reversed paper, reversed scissors, and reversed stone to continue playing! <br><br>`;
  }
};

var main = function (input) {
  // Create a game mode for users to enter their user name and invite them to choose a game mode as an output.

  console.log("The current game mode is", currentGameMode);
  if (currentGameMode == `waiting for user name`) {
    if (!input) {
      return `Please input your user name to play the game!`;
    }
    userName = input;
    currentGameMode = "choose game mode";

    return (
      `Hello ` +
      userName +
      `! Welcome to Andrew's scissors paper stone game!` +
      `<br>` +
      `Please enter 1 to play the normal mode.` +
      `<br>` +
      `Please enter 2 to play the reverse mode.`
    );
  }
  console.log("Currently the game mode is", currentGameMode);

  if (currentGameMode == `choose game mode`) {
    spsMode = input;

    if (input == "1") {
      currentGameMode = `sps normal mode`;

      return (
        `You've chosen the normal mode!` +
        `<br>` +
        `Please input scissors, paper or stone to play the game!`
      );
    } else if (input == "2") {
      currentGameMode = `sps reverse mode`;

      return (
        `You've chosen the reverse mode!` +
        `<br>` +
        `Please input reversed scissors, reversed paper or reversed stone to play the game!`
      );
    } else {
      return `Please input either "1" or "2" to choose a game mode`;
    }
  }
  var playerThrows = input;
  var computerPlayed = genSPSRandom();
  console.log("The computer played", computerPlayed);
  var outputPrefix = genOutputPrefix(playerThrows, computerPlayed);
  var outputSuffix = genOutputSuffix();

  console.log("The current game mode is ", currentGameMode);
  if (currentGameMode == `sps normal mode`) {
    console.log("The current game is ", currentGameMode);
    console.log("The current number of games played is:", numGamesPlayed);

    // Validate input: if input is not scissors, paper or stone, instruct user to type in scissors, paper or stone to play the game.
    if (
      playerThrows != scissors &&
      playerThrows != paper &&
      playerThrows != stone
    ) {
      return `Please type in scissors, paper or stone to play the game`;
    }
    // increase the number of games played by 1 if input is correct
    numGamesPlayed += 1;
    // Check if the game results in a draw
    if (drawCondition(playerThrows, computerPlayed)) {
      numGamesDrawn += 1;
      var currentWinRate = getWinRateInfo();
      return `${outputPrefix} It's a draw! 🤝 <br> ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
    }

    // Check if the game results in the user winning
    else if (winConditionNormalMode(playerThrows, computerPlayed)) {
      numGamesWon += 1;
      console.log("Your current number of games won is:", numGamesWon);
      currentWinRate = getWinRateInfo();
      return `${outputPrefix} Congratulations! 🎉 <br> You won! ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
    }
    // If it's neither a win nor a draw, it's a loss.
    else numGamesLost += 1;
    currentWinRate = getWinRateInfo();
    return `${outputPrefix} You lost! 😭  Better luck next time! <br> ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
  }

  // Check if the user chooses the reverse mode, and define the game logic
  if (currentGameMode == `sps reverse mode`) {
    console.log("The current game is ", currentGameMode);
    console.log("The current number of games played is:", numGamesPlayed);

    playerThrows = input;
    currentWinRate = getWinRateInfo();
    computerPlayed = genSPSRandom();
    console.log("The computer played", computerPlayed);
    playerEmoji = genSPSEmoji(input);
    computerEmoji = genSPSEmoji(computerPlayed);
    outputPrefix = genOutputPrefix(playerThrows, computerPlayed);

    // Validate input: if input is not scissors, paper or stone, instruct user to type in scissors, paper or stone to play the game.

    if (
      playerThrows != revScissors &&
      playerThrows != revPaper &&
      playerThrows != revStone
    ) {
      return `Please type in reversed scissors, reversed paper or reversed stone to play the game`;
    }
    // increase the number of games played by 1 if input is correct
    numGamesPlayed += 1;
    // Check if the game results in a draw
    if (drawCondition(playerThrows, computerPlayed)) {
      numGamesDrawn += 1;
      currentWinRate = getWinRateInfo();

      return `${outputPrefix} It's a draw! 🤝 <br> ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
    }

    // Check if the game results in the user winning
    else if (winConditionReverseMode(playerThrows, computerPlayed)) {
      numGamesWon += 1;
      currentWinRate = getWinRateInfo();
      console.log("Your current number of games won is:", numGamesWon);
      return `${outputPrefix} You won! Congratulations! 🎉  <br> ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
    }
    // If it's neither a win or a draw, then it's a loss.
    else numGamesLost += 1;
    currentWinRate = getWinRateInfo();
    return `${outputPrefix} You lost! 😭  Better luck next time! <br> ${outputSuffix} Your current win/loss record is: <br> ${userName} won: ${numGamesWon} times. <br> Computer won:  ${numGamesLost} times. <br> You both drew: ${numGamesDrawn} times. <br> ${currentWinRate}`;
  }
};
