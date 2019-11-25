console.log('I Work!!!')
//Create a class for Player
class Player {
  constructor (playerName) {
    let newName = playerName[0].toUpperCase() + playerName.slice(1);
    this.playerName = newName
    this.playerDeck = [] //Possibly delete may be redundant
  }
}
//Create a class for card
class Card {
  constructor (rank, suit, value) {
  this.rank = rank
  this.suit = suit
  this.value = value
  }
}
//Create a class for deck
class Deck {
  constructor () {
    this.card = []
    let ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
      'Ace'
    ]
    let suits = [
      'Heart',
      'Diamond',
      'Spade',
      'Club'
    ]
    ranks.forEach((rank, value) => {
      suits.forEach(suit => this.card.push(new Card(rank, suit, value)))
    }) // End of deck construction
  }
}
//Create a class for game
class Game {
  constructor (gameName) {
    let newName = gameName[0].toUpperCase() + gameName.slice(1);
    this.gameName = newName
    this.player = []
    this.deck = []
  }
  addDeck(newCards){
    this.deck.push(newCards)
  }
  //Insert add player method
  addPlayer(newPlayer) {
    if (this.player.length >= 2){
      console.log('There are already 2 players');
    }
    else {
      this.player.push(newPlayer)
    }
  }
  //Shuffle the cards
  shuffle(cards) {
    cards.sort(() => Math.random() - 0.5);
    let init = true
    console.log ('Shuffled')
    if(init = true){
      console.log('Pass the Cards')
      // const playerOneDeck = this.deck // Draft cards
      // const playerTwoDeck = this.deck // Draft cards
      // playerOne.playerDeck.push(playerOneDeck)
      // playerTwo.playerDeck.push(playerTwoDeck)
    } else {
      console.log('Shuffle the deck')
    }
  }
   passCards(data) {
    //playerOne.playerDeck.splice(0,26)
    if (playerOneDeck) {
    data.splice(0, 26)
    console.log('Player One Ready')
  } else if (playerTwoDeck) {
    data.splice(26, 51)
    console.log('Player Two Ready')
  } else {
    console.log('Please pass the cards')
  }
  }
}
// Create Object Game for War
const war = new Game('card war')
console.log(war); //Just So I can see
// Create Deck
const deck = new Deck()
// console.log(deck.card) //Just So I can see
// Create players
const playerOne = new Player('playerOne')
const playerTwo = new Player('playerTwo')
// Add players to game
war.addPlayer(playerOne); //add player one to game
war.addPlayer(playerTwo); //add player two to game
// Add deck to war
war.addDeck(deck); //add deck to game
// Shuffle the deck
war.shuffle(deck.card)
const playerOneDeck = war.deck // Draft cards
const playerTwoDeck = war.deck // Draft cards
playerOne.playerDeck.push(playerOneDeck)
playerTwo.playerDeck.push(playerTwoDeck)
//Event Listener??
document.addEventListener('Pass the Cards', war.passCards(playerOneDeck)) //Trying to get it to splice the new cards but it is not working
document.addEventListener('Player One Ready', war.passCards(playerTwoDeck))
//Pass cards
// war.passCards(playerOneDeck)
// war.passCards(playerTwoDeck)
console.log(deck.card) //just so I can see

playGame(); {
  for (let i = 0; i < playerOneDeck.length || i < playerTwoDeck.length; i++) {
     if(playerOneDeck.length < 0) {
       console.log('Player two wins!')
      //  return ('Player two wins')
     } else if(playerTwoDeck.length < 0) {
       console.log('Player one wins')
      //  return ('Player one wins')
     } else if(playerOneDeck[i]['value'] > playerTwoDeck[i]['value']) {
       playerOneDeck.push(playerTwoDeck[i])
       playerTwoDeck.pop()
       console.log('Player one pulls ' + playerOneDeck[i]['rank'] + ' of '+ playerOneDeck[i]['suit'] + ' ' + 'Player two pulls ' + playerTwoDeck[i]['rank']+ ' of '+ playerTwoDeck[i]['suit'])
       console.log('Player one wins the round')
     } else if(playerOneDeck[i]['value'] < playerTwoDeck[i]['value']) {
       playerTwoDeck.push(playerOneDeck[i])
       playerOneDeck.pop()
       console.log('Player one pulls ' + playerOneDeck[i]['rank'] + ' of '+ playerOneDeck[i]['suit'] + ' ' + 'Player two pulls ' + playerTwoDeck[i]['rank']+ ' of '+ playerTwoDeck[i]['suit'])
       console.log('Player two wins the round')
     }
   }
  }






