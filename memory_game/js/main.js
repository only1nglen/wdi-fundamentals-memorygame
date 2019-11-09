const cards = ["queen" , "queen" , "king", "king"];

const cardsInPlay = []

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard () {

cardsInPlay.push (cards[0]);
console.log("User flipped " + cards[0]);

cardsInPlay.push (cards[2]);
console.log("User flipped " + cards[2]);

checkForMatch ();

	if (cardsInPlay.length === 2) {
	console.log("2 cards in play");
}

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
}

flipCard(0);
flipCard(2);
