vvar deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 2
  },
  {
    name: "2",
    suit: "hearts",
    rank: 50
  },
  {
    name: "3",
    suit: "hearts",
    rank: 46
  },
  {
    name: "4",
    suit: "hearts",
    rank: 42
  },
  {
    name: "5",
    suit: "hearts",
    rank: 38
  },
  {
    name: "6",
    suit: "hearts",
    rank: 34
  },
  {
    name: "7",
    suit: "hearts",
    rank: 30
  },
  {
    name: "8",
    suit: "hearts",
    rank: 26
  },
  {
    name: "9",
    suit: "hearts",
    rank: 22
  },
  {
    name: "10",
    suit: "hearts",
    rank: 18
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 14
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 10
  },
  {
    name: "king",
    suit: "hearts",
    rank: 6
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 4
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 52
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 48
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 44
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 40
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 36
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 32
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 28
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 24
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 20
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 16
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 8
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 3
  },
  {
    name: "2",
    suit: "clubs",
    rank: 51
  },
  {
    name: "3",
    suit: "clubs",
    rank: 47
  },
  {
    name: "4",
    suit: "clubs",
    rank: 43
  },
  {
    name: "5",
    suit: "clubs",
    rank: 39
  },
  {
    name: "6",
    suit: "clubs",
    rank: 35
  },
  {
    name: "7",
    suit: "clubs",
    rank: 31
  },
  {
    name: "8",
    suit: "clubs",
    rank: 27
  },
  {
    name: "9",
    suit: "clubs",
    rank: 23
  },
  {
    name: "10",
    suit: "clubs",
    rank: 19
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 15
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 11
  },
  {
    name: "king",
    suit: "clubs",
    rank: 7
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1
  },
  {
    name: "2",
    suit: "spades",
    rank: 49
  },
  {
    name: "3",
    suit: "spades",
    rank: 45
  },
  {
    name: "4",
    suit: "spades",
    rank: 41
  },
  {
    name: "5",
    suit: "spades",
    rank: 37
  },
  {
    name: "6",
    suit: "spades",
    rank: 33
  },
  {
    name: "7",
    suit: "spades",
    rank: 29
  },
  {
    name: "8",
    suit: "spades",
    rank: 25
  },
  {
    name: "9",
    suit: "spades",
    rank: 21
  },
  {
    name: "10",
    suit: "spades",
    rank: 17
  },
  {
    name: "jack",
    suit: "spades",
    rank: 13
  },
  {
    name: "queen",
    suit: "spades",
    rank: 9
  },
  {
    name: "king",
    suit: "spades",
    rank: 5
  }
];

var playerCards = [];
var computerCards = [];

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var shuffledDeck = shuffleCards(deck);

var didPlayerWin = function (computerCard, playerCard) {
  return computerCard.rank > playerCard.rank;
};

var didPlayerLose = function (computerCard, playerCard) {
  return computerCard.rank < playerCard.rank;
};

var followObjectsMain = function (input) {
  // Draw 2 cards from the top of the deck
  var computerFirstCard = shuffledDeck.pop();
  computerCards.push(computerFirstCard);
  var playerFirstCard = shuffledDeck.pop();
  playerCards.push(playerFirstCard);
  var computerSecondCard = shuffledDeck.pop();
  computerCards.push(computerSecondCard);
  var playerSecondCard = shuffledDeck.pop();
  computerCards.push(playerSecondCard);

  // Construct an output string to communicate which cards were drawn

  var myOutputValue = `Computer had: ${computerFirstCard.name} of ${computerFirstCard.suit} and ${computerSecondCard.name} of ${computerSecondCard.suit}. <br> Player had: ${playerFirstCard.name} of ${playerFirstCard.suit} and ${playerSecondCard.name} of ${playerSecondCard.suit}. `;

  // Compare computer and player cards by rank attribute. If computer card rank is greater than player card, computer wins
  if (
    playerFirstCard.rank < computerFirstCard.rank &&
    computerSecondCard.rank
  ) {
    // Add conditional-dependent text to the output string
    return `${myOutputValue} <br> Player wins!`;
  } else if (
    playerSecondCard.rank < computerFirstCard.rank &&
    computerSecondCard.rank
  ) {
    return `${myOutputValue} <br> Player wins!`;
  } else {
    return `${myOutputValue} <br> Player loses!`;
  }
};
// Return the fully-constructed output string

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Initialise an empty deck array
  console.log(`start of main function`);
  var cardDeck = [];

  // Initialise an array of the 4 suits in our deck. We will loop over this array.

  var suits = [`hearts`, `diamonds`, `clubs`, `spades`];
  console.log(`the suits are`, suits);

  // Loop over the suits array

  for (var i = 0; i < suits.length; i += 1) {
    console.log(`control flow, for loop is being executed`);
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit. Notice the rankCounter starts at 1 and not 0, and ends at 13 and not 12. This is an example of a loop without an array
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = rankCounter;

      // If rank is 1, 11, 12 or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = `ace`;
      } else if (cardName == 11) {
        cardName = `jack`;
      } else if (cardName == 12) {
        cardName = `queen`;
      } else if (cardName == 13) {
        cardName = `king`;
      }

      // Create a new card with the current name, suit, and rank

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      console.log(`the current card is`, card);
      cardDeck.push(card);
    }
    console.log(cardDeck);
  }
  console.log(cardDeck);
};
