class Card {
  constructor (rank, suit, value) {
    this.rank = rank
    this.suit = suit
    this.value = value
  }
}

class Deck {
  constructor() {
    this.cards = []
    
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ]
    
    let suits = [
      "Heart",
      "Club",
      "Diamond",
      "Spade"
    ]
  
    /** Imperative: with `for` loops */
    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        let rank = ranks[i]
        let suit = suits[j]
        let value = i
        
        this.cards.push(new Card(rank, suit, value))
      }   
    }
    
    /** Declarative: with `Array.forEach` methods */
  //   ranks.forEach((rank, value) => {
  //     suits.forEach(suit => this.cards.push(new Card(rank, suit, value)))
  //   })
  } // end of Deck constructor
}
  const deck = new Deck()
  /** for shuffling, research how to shuffl the contnents of an Array.
   * if you see "Fisher-Yates" or "Knuth", your getting warm!
   */

//shuffle deck of cards 
  function shuffle(array) {
  
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -- ;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
}

newDeck = deck.cards;
shuffle(newDeck)
console.log(newDeck)
// const deck = new Deck()
// shuffle(deck)
// console.log(deck.cards)

player1 = newDeck.splice(26,52);
player2 = newDeck.splice(0,26);
console.log(player1)
console.log(player2)

function didSomeoneWin(){
  if (player1.length == 52){
      console.log("Player 1 Wins!")
  } else if (player2.length == 52) {
      console.log("Player 2 Wins!")
  } else{
      console.log('check')
  }
}

function compare() {
  let card1 = player1.shift()
    console.log(card1)
  let card2 = player2.shift()
    console.log(card2)
if (card1.value > card2.value) {
    console.log("Player 1 wins!");
    player1.push(card1, card2);
    console.log(player1);
    console.log(player2);
} else if (card1.value < card2.value) {
    console.log("Player 2 wins!");
    player2.push(card1, card2);
    console.log(player1);
    console.log(player2);
} else {
    console.log ("Its a tie")
}; 
didSomeoneWin()
}

// --->run "compare()" in the console to play the game






// go to war function 



