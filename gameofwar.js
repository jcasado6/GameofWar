class Deck {
  constructor() {
    this.deck = [];

    let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle(){
    const deck = this.deck;
    let m = deck.length, i;
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
  }
}


const deck1 = new Deck();
deck1.shuffle()
console.log(deck1.deck);


array = deck1.deck
player1 = array.splice(26,52);
player2 = array.splice(0,26);
console.log(player1)
console.log(player2)


// start the game and compare cards
  function compare() {
      let card1 = player1.shift()
        console.log(card1)
      let card2 = player2.shift()
        console.log(card2)
    if (card1.values > card2.values) {
        console.log("Player 1 wins!");
        player1.push(card1, card2);
        console.log(player1);
        console.log(player2);
    } else if (card1.values < card2.values) {
        console.log("Player 2 wins!");
        player2.push(card1, card2);
        console.log(player1);
        console.log(player2);
    } else {
        console.log ("Its a tie")
    };
}
compare()

// go to war function 

// function war ()




