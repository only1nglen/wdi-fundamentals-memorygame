var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
  {
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
}, 
  {
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];

const cardsInPlay = []

function checkForMatch() {

if (cardsInPlay[0] === cardsInPlay[1]) {
	//alert("You found a match!");
	console.log("You found a match!");
} else {
	//alert("Sorry, try again.");
	console.log("Sorry, try again.");
	}
};

function flipCard (cardID) {
	cardsInPlay.push(cards[0].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	cardsInPlay.push(cards[2].rank);
	console.log("user flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

if (cardsInPlay.length === 2) {
	//console.log("2 cards in play");
	checkForMatch();
	}
};


flipCard(0);
flipCard(2);