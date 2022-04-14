var adjectives = [];

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one. This number is in the range from the first index (zero) to the last index (array length minus 1)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  if (input == "create") {
    // get a random index from the array
    var randomIndex = getRandomIndex(adjectives.length);
    console.log(randomIndex);
    var randomAdj = adjectives[randomIndex];
    console.log(adjectives);
    console.log("The current random adjective is ", randomAdj);
    var madLib = `WOW! He said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    return madLib;
  }
  // Initialize the variable found, and set the default value to falses
  var found = false;
  for (var index = 0; index < adjectives.length; index += 1) {
    var currentAdjective = adjectives[index];
    if (currentAdjective == input) {
      found = true;
      return `${input} has already been registered. Please input another adjective.`;
    }
  }

  if (!found) {
    adjectives.push(input);
    console.log(adjectives);
    return `Enter an adjective to continue building the library or type "create" to madlib. <br> The current available objectives are" ${adjectives}.`;
  }
};

/**
 * Comfortable: Input and Create Mode
 */

// Default to input mode
const inputMode = `input`;
const createMode = `create`;

//Default to input mode
var currentMode = inputMode;

// New list of adjectives to avoid conflict with the `adjectives`

var inputCreateAdj = [];

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  if (input == `input`) {
    currentMode = inputMode;
    //show user list of adjectives when switching back to input mode
    return `You have switched to input mode. <br> <br> Enter an adjective or type "create" to switch to create mode`;
  }

  if (input == `create`) {
    currentMode = createMode;
    console.log("the current game mode is", currentMode);
    return `You have switched to create mode. <br><br> Hit submit to Mad Lib.`;
  }

  if (currentMode == createMode) {
    // get a random index from the array
    var randomIndex = getRandomIndex(inputCreateAdj.length);
    var randomAdj = inputCreateAdj[randomIndex];
    var madLib = `WOW! he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife. Hit submit again to madlib or type "input" to switch to input mode.`;
    return madLib;
  }

  // if the current mode is `input` and input is valid (not empty string)
  // input.trim() cuts whitespace from both ends of the string - if the result is not an empty string, it is valid

  if (currentMode == inputMode && input.trim() != ``) {
    console.log("the current game mode is", currentMode);
    var found = false;
    for (var index = 0; index < inputCreateAdj.length; index += 1) {
      var currentAdj = inputCreateAdj[index];
      if (currentAdj == input) {
        found = true;
        return `${input} already exists. Please enter another adjective`;
      }
    }
    if (!found) {
      inputCreateAdj.push(input);
      return `You have added ${input}. <br><br> Your currently have the following words: <br> ${inputCreateAdj} <br><br> Enter another adjective or type "create to madlib.`;
    }
  }
};
/**
 * Comfortable: Input Multiple Woeds
 */

// Default to input mode

const multiWordsInputMode = `input`;
const multiWordsCreateMode = `create`;
var currentMode = multiWordsInputMode;

// New list of adjectives

var multiWordsAdj = [];

var parseInputWords = function (inputString) {
  // Assume inputString is a string of words separated by a space
  // return value is an array of each substring separated by a space in inputString
  return inputString.split(` `);
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.

  // When user type in "input", inform them that they are in input mode, and invite them to type a list of adjectives, separated by a space, or type "create" to switch to create mode.
  if (input == `input`) {
    currentMode = multiWordsInputMode;
    return `You have switched to input mode. <br><br> 
    Enter a list of adjectives, each separated by a space, or type "create" to switch to create mode.`;
  }
  // When user type in "create", inform them that they're in the create mode and invite them to click the submit button to madlib.

  if (input == `create`) {
    currentMode = multiWordsCreateMode;
    return `You have switched to create mode. <br><br> Hit Submit to madlib`;
  }

  if (currentMode == `create`) {
    // get a random index from the array
    var randomIndex = getRandomIndex(multiWordsAdj.length);

    // use the random index to get a random word value from the array
    var randomAdj = multiWordsAdj[randomIndex];

    // create the full madlib sentence
    var madLib = `WOW! he said EXCITEDLY as he jumpted into his convertible FERRARI and drove off with his ${randomAdj} wife.`;
    return madLib;
  }

  if (currentMode == `input`) {
    // If input is empty, prompt the user to input words
    if (input.trim() == ``) {
      return `Please input adjectives separated by a space each to fill our Mad Lib`;
    }
    // Otherwise, save the user-inputted words for later
    var inputAdj = parseInputWords(input);

    for (var counter = 0; counter < inputAdj.length; counter += 1)
      multiWordsAdj.push(inputAdj[counter]);
  }
  // Create feedback for user on input
  // The array join () method joins an array's items into a string, separated by the string passed as an argument.
  var feedbackMessage = `You have added ${inputAdj.join(
    `, `
  )} to our list of adjectives. <br><br> Enter another list of adjectives separated by a space each or type "create" to switch to create mode.`;
  return feedbackMessage;
};

/**
 *
 * More Comfortable: Mad Libs Multiple Word Types
 */

// Store a global wordType variable to determine what word type gets inputted in input mode

var currWordType = `exclamations`;

// Store different word types in their own global array

var exclamations = [];
var adverbs = [];
var nouns = [];
var adjs = [];

// Default to input mode, renamed mode to avoid conflict.

var multiTypesMode = "input";

var generateInputPrompt = function (nextWordType) {
  return `
  Our list of exclamations is ${exclamations.join(`, `)}<br><br>
  Our list of adverbs is ${adverbs.join(`, `)}<br><br>
  Our list of nouns is ${nouns.join(`, `)}<br><br>
  Our list of adjectives is ${adjs.join(`, `)}<br><br>
  Please input ${nextWordType} separated by a space to fill in our Mad Lib. <br><br>> If you have input words for each word type, type "create" to enter create mode to generate complete mad libs`;
};

// Stor user inputted words in the relevant global word array

var storeInputWords = function (inputWords) {
  //Initialize empty variable as a placeholder for the word array we wish to add to
  var wordArray;
  // Define wordArray to be the relevant array depending on the current input word type

  if (currWordType == exclamations) {
    wordArray = exclamations;
  } else if (currWordType == adverbs) {
    wordArray = adverbs;
  } else if (currWordType == nouns) {
    wordArray = nouns;
  } else {
    wordArray = adjs;
  }

  // Add all input words into the relevant word array
  for (var counter = 0; counter < inputWords.length; counter += 1) {
    wordArray.push(inputWords[counter]);
  }
};
// Get the next word type that user should input
// Our hard-coded order is exclamations > adverbs > nouns > adjectives

var genNextWordType = function () {
  if (currWordType == exclamations) {
    return adverbs;
  }
  if (currWordType == adverbs) {
    return nouns;
  }
  if (currWordType == nouns) {
    return adjectives;
  }
  return exclamations;
};

// Return a random element in the given array

var getRandomElemInArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var completeMadLinMultipleWords = function () {
  // Get a random word from each word type
  var randomExc = getRandomElemInArray(exclamations);
  var randomAdv = getRandomElemInArray(adverbs);
  var randomNoun = getRandomElemInArray(nouns);
  var randomAdjs = getRandomElemInArray(adjs);
  return `
  ${randomExc}! he said ${randomAdv} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdjs} wife.<br><br> 
  Hit submit to complete the Mad Lib again, or enter "input" to input more words.`;
};

// Create a feedback message for user input
var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  if (input == `input`) {
    multiTypesMode == `input`;
    // show user list of adjectives whenn switching back to input mode
    return `
  You have switched to input mode. <br><br> ${generateInputPrompt(
    currWordType
  )}`;
  }
  if (input == `create`) {
    multiTypesMode = `create`;
    return `
  You have switched to create mode. Hit submit to complete the Mad Lib.`;
  }
  if (multiTypesMode == `input`) {
    // If input is empty, prompt user to input words
    if (input.trim() == ``) {
      return `Please input ${currWordType} separated by a space each to fill in our Mad Lib`;
    }
    var inputWords = parseInputWords(input);
    storeInputWords(inputWords);
    // Notice the following logic. We generate the feedback message using currWordType, then set currWordType to nextWordType, then return the feedback message to the user.
    var nextWordType = genNextWordType();
    // Create a feedback message for user on input
    var feedbackMessage = `
  You have added ${inputWords.join(
    `, `
  )} to our list of ${currWordType}. <br><br>
  ${generateInputPrompt(nextWordType)}`;

    // cycle to the next word type for the next user input
    currWordType = nextWordType;
    return feedbackMessage;
  }
  if (multiTypesMode == `create`) {
    return completeMadLinMultipleWords();
  }
  // If we reach this part of control flow, something went wrong
  return `Oops, something went wrong!`;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
