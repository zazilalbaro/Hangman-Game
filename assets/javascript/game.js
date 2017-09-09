window.onload = function() {

var game = {
	babies: ["calf", "fawn", "foal", "hatchling", "joey", "kit", "kitten", "peachick", "piglet", "porcupette", "puggle", "squab", "tadpole", "pup"],
	wins: 0,
	losses: 0,
	baby: "",
	badGuesses: [],
	correctGuesses: [],
	corrGuessNum: 0,
	userLtr: null,
	gameOn: false,
	remGuesses: 0,

	reset: function() {
		this.gameOn = true;
		this.corrGuessNum = 0;
		document.getElementById("babyPic").src = "assets/images/babies.jpg";
		this.baby = null;
		this.generateWord();
		this.badGuesses = [];
		document.getElementById("badGuesses").innerHTML = this.badGuesses;
		this.correctGuesses = [];
		this.remGuesses = this.baby.length * 2;
		document.getElementById("remGuesses").innerHTML = this.remGuesses;
		this.displayWord();
		console.log("reset" + this.baby + " " + this.remGuesses)
	},

	userGuess: function(letter) {
		if (this.gameOn) {
			// check if letter already guessed.
			if ((this.badGuesses.indexOf(letter) < 0) && (this.correctGuesses.indexOf(letter) < 0)) {
				// Determine if guess is correct.
				if (this.baby.indexOf(letter) != -1) {
					// Good Guess
					this.correctGuesses.push(letter);
					this.ltrGuessed();
				} 
				else {
					// Bad Guess
					this.badGuesses.push(letter);
					this.ltrNotGuessed();
				};
			}
		}
	},

	// function to process after good guess
	ltrGuessed: function() {
		this.displayWord();
		// For new guesses reduce remGuesses
		this.remGuesses--;
		document.getElementById("remGuesses").innerHTML = this.remGuesses;
		// check if they won (all letters guessed)
		if (this.corrGuessNum == this.baby.length) {
			this.wins++;
			document.getElementById("wins").innerHTML = "Wins: " + this.wins;
			document.getElementById("babyPic").src = "assets/images/" + this.baby.toLowerCase() + ".jpg";
			console.log("img assets/images/" + this.baby.toLowerCase() + ".jpg")
			this.gameOn = false;
		}
		// check if they lost (out of guesses)
		else if (this.remGuesses == 0) {
			this.losses++;
			document.getElementById("losses").innerHTML = "Losses: " + this.losses;
			this.gameOn = false;
		};
	},

	// some function to process after bad guess
	ltrNotGuessed: function() {
		document.getElementById("badGuesses").innerHTML = this.badGuesses;
		// For new guesses reduce remGuesses
		this.remGuesses--;
		document.getElementById("remGuesses").innerHTML = this.remGuesses;
		// check if they lost (out of guesses)
		if (this.remGuesses == 0) {
			this.losses++;
			document.getElementById("losses").innerHTML = "Losses: " + this.losses;
			this.gameOn = false;
		}
	},

	generateWord: function() {
		this.baby = this.babies[Math.floor(Math.random() * this.babies.length)].toUpperCase();
		console.log("genword" + this.baby)
	},

	displayWord: function() {
		var wordInProgress = "";
		this.corrGuessNum = 0;
		for (var i=0; i < game.baby.length; i++) {
			if (game.correctGuesses.indexOf(this.baby.charAt(i)) != -1) {
			// show letter, guessed
			wordInProgress = wordInProgress + this.baby.charAt(i) + " ";
			this.corrGuessNum++;
			} 
			else {
			// show dash, not guessed
			wordInProgress = wordInProgress + "_ ";
			}
		};
		console.log("word in progress:" + wordInProgress);
		document.getElementById("wordProgress").innerHTML = wordInProgress;
	}
}; // end of object


//Game Begins with New Game button
document.getElementById("newGame").addEventListener("click", function() {
	game.reset();
});

document.onkeyup = function(event) {
    game.userltr = String.fromCharCode(event.keyCode).toUpperCase();
// bind event to process user guess
	game.userGuess(game.userltr);



}










}; // end of script



