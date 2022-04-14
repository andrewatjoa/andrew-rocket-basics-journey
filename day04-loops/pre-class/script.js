var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var followAlongMain = function (input) {
  for (var counter = 0; counter < 10; counter += 1) {
    console.log(`hello`);
  }
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";

  for (var i = 0; i < input; i += 1) {
    // The 'i' loop runs input number of times
    for (var j = 0; j < input; j += 1) {
      myOutputValue = myOutputValue + `x`;

      console.log(`j: `, j);
    }
    // At the end of each `i` loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + `<br>`;

    console.log(`i: `, i);
  }
  // After the outer loop has run to completion, return the output compiled by the above loops
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  // Initiate the Outer loop
  var outerCounter = 0;

  // While outerCounter <3, initiate the inner loop
  while (outerCounter < input) {
    // Inside the outer loop, initialise the inner counter

    var innerCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until the inner loop condition is met.
    while (innerCounter < 2 * input) {
      // Each time the inner loop runs, it adds "hello" to output
      myOutputValue += "hello ";
      innerCounter += 1;
    }
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue += `<br>`;
    outerCounter += 1;
  }
  // After the outer loop has run to completion, return the output compiled by the above loops
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
