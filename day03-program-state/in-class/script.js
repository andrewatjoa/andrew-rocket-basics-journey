// create a function to generate a random number from 1-3 and assign that number to the words "banana", "chisel" and "faucet"
var genRandomItem = function () {
  var randomNo = Math.ceil(Math.random() * 3);

  if (randomNo == 1) {
    return "banana";
  }
  if (randomNo == 2) {
    return "chisel";
  }
  if (randomNo == 3) {
    return "faucet";
  }
};

var genNoOfWins = function () {
  var randNoWins = Math.ceil(Math.random()) * 2 + 2;
  return randNoWins;
};

// Declare a variable computerChooses
var winCount = 0;
//
var secretWordBaseMain = function (input) {
  var computerChooses = genRandomItem();
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "";

  if (input != `banana` && input != `chisel` && input != `faucet`) {
    return `Please input "banana", "chisel" or "faucet" to play the game.`;
  }

  if (input == computerChooses) {
    winCount += 1;
    if (winCount >= 2) {
      myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}s`;
    } else {
      myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
        2 - winCount
      } more wins`;
    }
  } else {
    myOutputValue = `You lose! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
      2 - winCount
    } more wins`;
  }
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var computerChooses = genRandomItem();
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "";

  if (input == computerChooses) {
    winCount += 1;
    if (winCount == 2) {
      myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}s`;
    }
    myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
      2 - winCount
    } more wins`;
  } else {
    winCount = 0;
    myOutputValue = `You lose! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
      2 - winCount
    } more wins`;
  }
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var computerChooses = genRandomItem();
  var noOfWins = genNoOfWins();
  var nextNoOfWins = genNoOfWins();

  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "";

  if (input == computerChooses) {
    winCount += 1;
    if (winCount == noOfWins) {
      myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}, your next round will need ${nextNoOfWins}`;
    } else {
      myOutputValue = `You win! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
        noOfWins - winCount
      } more wins`;
    }
  } else {
    winCount = 0;
    myOutputValue = `You lose! You've guessed ${input}, the secret is ${computerChooses}, you still need ${
      noOfWins - winCount
    } more wins`;
  }
  return myOutputValue;
};

// Generate randWithinNo between 1 to 3
var randWithinNo = Math.ceil(Math.random() * 3);
var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.

  // Generate randDiceNo between 1 to 6
  var randDiceNo = Math.floor(Math.random() * 6) + 1;

  // Calculate rangeWinningDiceNo, which is randDiceNo +/- randWithinNo
  var higherRange = randWithinNo + randDiceNo;
  var lowerRange = randDiceNo - randWithinNo;

  //If randDiceNo = rangeWinningDiceNo, player wins?? Else, player loses
  console.log(randDiceNo);
  console.log(randWithinNo);
  if (input <= higherRange && input >= lowerRange) {
    var newRandWithinNo = randWithinNo();
    return "You Win!";
  } else {
    return "You lose!";
  }
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
