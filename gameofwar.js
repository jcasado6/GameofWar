class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.pop();
  }
}

const deck1 = new Deck();
deck1.shuffle()
console.log(deck1.deck);
//   deck1.deal()
//   console.log(deck1.deck);

array = deck1.deck
player1 = array.splice(26,52);
player2 = array.splice(0,26);
console.log(player1);
console.log(player2)
// array will = 'shuffledDeck[]' (an array of random cards)
// player1 will be shuffledDeck.splice(26,52)
// player2 will be shuffledDeck.splice(0,26)
