// Declaring global variables that determines game state

const gameStateDiceRoll = `game state dice roll`;
const gameStateChooseDiceOrder = `game state choose dice order`;
const gameStateCompareScores = `game state compare scores`;
var gameState = gameStateDiceRoll;

// Create an array to store the rolled dice values
var currentPlayerRolls = [];

var currentPlayer = 1;
var allPlayersScore = [0, 0];

var resetGame = function () {
  currentPlayer = 1;
  gameState = gameStateDiceRoll;
};

// helper function to roll dice

var rollDice = function () {
  console.log(`Control flow: start of rollDice()`);
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.ceil(randomDecimal);
  console.log(`the roll dice output is `, randomInteger);
  return randomInteger;
};

// create a helper function that will roll two dice and return a message

var rollDiceForPlayer = function () {
  console.log(`Control Flow: start of rollDiceForPlayer()`);
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter += 1;
  }
  console.log(
    `rollDiceForPlayer changes, currentPlayerRolls: `,
    currentPlayerRolls
  );
  return `Welcome, Player ${currentPlayer}! <br><br> You rolled: <br> Dice 1: ${currentPlayerRolls[0]} <br> Dice 2: ${currentPlayerRolls[1]} <br><br> Now, please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value.`;
};

var getPlayerScore = function (playerInput) {
  var playerScore;
  // input validation
  if (playerInput != 1 && playerInput != 2) {
    return `Error! Please only input "1" or "2" to choose which dice to use as the first digit. <br><br> Your dice rolls are: <br> Dice 1: ${currentPlayerRolls[0]} <br> Dice 2: ${currentPlayerRolls[1]}`;
  }
  // if player input "1"
  if (playerInput == 1) {
    console.log(`Control flow: input == 1`);

    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
    console.log(`current player score is: `, playerScore);
  }
  // if player input "2"
  if (playerInput == 2) {
    console.log(`Control flow: input == 2`);
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
    console.log(`current playerScore is: `, playerScore);
  }
  // Store playerScore in array
  allPlayersScore[currentPlayer - 1] += playerScore;
  //Clear current player rolls array
  currentPlayerRolls = [];
  return `Player ${currentPlayer}, Your chosen value is: ${playerScore}.`;
};

var comparePlayerScores = function () {
  var compareMessage = `Player 1 scores: ${allPlayersScore[0]} <br> Player 2 scores: ${allPlayersScore[1]}`;
  console.log(allPlayersScore);
  // player 1 wins
  if (allPlayersScore[0] > allPlayersScore[1]) {
    compareMessage = `${compareMessage} <br> <br> Player 1 wins!`;
  }
  // player 2 wins
  if (allPlayersScore[0] < allPlayersScore[1]) {
    compareMessage = `${compareMessage} <br> <br> Player 2 wins!`;
  }
  // tie
  if (allPlayersScore[0] == allPlayersScore[1]) {
    compareMessage = `${compareMessage} <br> <br> It's a tie!`;
  }
  return compareMessage;
};

var main = function (input) {
  console.log(
    `Checking game state when the submit button is clicked: `,
    gameState
  );
  console.log(`Checking currentPlayer on submit click: `, currentPlayer);
  var myOutputValue = "";
  if (gameState == gameStateDiceRoll) {
    console.log(`Control flow: gameState == gameStateDiceRoll`);
    // Change the game state
    gameState = gameStateChooseDiceOrder;
    return rollDiceForPlayer();
  }

  if (gameState == gameStateChooseDiceOrder) {
    console.log(`Control flow: gameState == gameStateChooseDiceOrder`);

    // Call playerScore function
    myOutputValue = getPlayerScore(input);

    if (input != 1 && input != 2) {
      return `Error! Please only input "1" or "2" to choose which dice to use as the first digit. <br><br> Your dice rolls are: <br> Dice 1: ${currentPlayerRolls[0]} <br> Dice 2: ${currentPlayerRolls[1]}`;
    } else if (currentPlayer == 1) {
      console.log(
        `Control flow: end of player 1's turn, now it's player 2's turn.`
      );
      currentPlayer = 2;
      gameState = gameStateDiceRoll;
      return `${myOutputValue} <br><br> It is now player 2's turn!"`;
    } else if (currentPlayer == 2) {
      console.log(
        `Control flow: end of player 2's turn. Next, submit click will calculate score`
      );
      console.log(`The current allPlayerScores array is `, allPlayersScore);
      gameState = gameStateCompareScores;
      return `${myOutputValue} <br><br> Press submit to compare scores`;
    }
  }

  if (gameState == gameStateCompareScores) {
    console.log(`Control flow: gameState == gameStateCompareScores`);
    console.log(`The current allPlayerScores array is `, allPlayersScore);

    var outputMessage = comparePlayerScores();

    resetGame();
    console.log(`Current player after reset: `, currentPlayer);
    console.log(`Game state after reset: `, gameState);
    console.log(`allPlayersScore array: `, allPlayersScore);
    return outputMessage;
  }
};

//----------REQUIREMENTS------------//
// 1) there are 2 players and players take turnns
// 2) when a player clicks submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// 3) the player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the second dice goes first
// 4) After both players have rolled and chosen dice order, the player with the higher combined number wins.
//----------PROBLEMS BREAKDOWN AND PLANNING-----------//
// ver 1: rolls 2 dice and turns the output for 1 player. That player chooses the dice order and get the correct return output.
// ver 2: refactor code to include player 2
//    - global variables for currentPlayer; allPlayersScore
//    - refactor outputMessages to interact with each, player 1 and 2
//    - write logic for player 1 to go first and then player 2, and finally point towards comparing score

// ver 3: implement comparing dice scores and declare winner
// ver 4. reset the game so that the players can play continually without refreshing the browser page
