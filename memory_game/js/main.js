const cards = ["queen" , "queen" , "king", "king"];

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
	cardsInPlay.push(cards[0]);
	console.log("User flipped " + cards[0]);

	cardsInPlay.push(cards[2]);
	console.log("user flipped " + cards[2]);

if (cardsInPlay.length === 2) {
	//console.log("2 cards in play");
	checkForMatch();
	}
};


flipCard(0);
flipCard(2);