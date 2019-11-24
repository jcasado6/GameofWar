class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

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
    // return this;
  }
  deal(){
    return this.deck.pop();
  }
}

const deck1 = new Deck();
deck1.shuffle()
console.log(deck1.deck);
deck1.deal()
console.log(deck1.deck);

array = deck1.deck
player1 = array.splice(26,52);
player2 = array.splice(0,26);
console.log(player1)
console.log(player2)
// array will = 'shuffledDeck[]' (an array of random cards)
// player1 will be shuffledDeck.splice(26,52)
// player2 will be shuffledDeck.splice(0,26)



// function compare() {
function compare() {

  card1 = player1[player1.length -1];
  // player1 = player1.pop[player1.length -1];
  // console.log(card1);
  // console.log(player1)
  card2 =player2[player2.length -1];
  // player2 = player2.pop
  if (card1.values > card2.values) {
    console.log('Player 1 Wins!')
  } else if (card1.values < card2.values) {
    console.log('Player 2 Wins!')
  }
}
compare()



