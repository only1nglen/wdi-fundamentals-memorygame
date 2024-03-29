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

var cardsInPlay = []

function checkForMatch() {

if (cardsInPlay[0] === cardsInPlay[1]) {
	//alert("You found a match!");
	console.log("You found a match!");
} else {
	//alert("Sorry, try again.");
	console.log("Sorry, try again.");
	}
};

function flipCard () {
	var cardID = this.getAttribute('data-id');
	console.log(this);

	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	this.setAttribute('src', cards[cardID].cardImage);

if (cardsInPlay.length === 2) {
	//console.log("2 cards in play");
	checkForMatch();
	}
};

function createboard() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}

createboard();
