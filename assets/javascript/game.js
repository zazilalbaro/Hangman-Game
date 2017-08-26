window.onload = function() {

var game = {
	babies: ["calf", "fawn", "foal", "hatchling", "joey", "kit", "kitten", "peachick", "piglet", "porcupette", "puggle", "squab", "tadpole", "pup"],
	wins: 0,
	losses: 0,
	baby: "",
	bGuesses: [],
	correctGuesses: [],
	userLtr: null,
	gameOn: false,
	wordInProgress: "",
	rGuesses: 0,

	reset: function() {
		this.gameOn = true;
		this.baby = null;
		this.generateWord();
		this.bGuesses = [];
		this.goodGuesses = [];
		this.rGuesses = this.baby.length * 2;
		this.displayWord();
		console.log("reset" + this.baby + " " + this.rGuesses)
	},

	userGuess: function(letter) {
		if (this.gameOn) {
			// check if letter already guessed.
			if ((this.bGuesses.indexOf(letter) < 0) && (this.goodGuesses.indexOf(letter) < 0)) {
				// Determine if guess is correct.
				if (this.baby.indexOf(letter) != -1) {
					// Good Guess
					isCorrect = true;
					this.goodGuesses.push(letter);
					this.ltrGuessed();
				} 
					
				else {
					// Bad Guess
					isCorrect = false;
					this.bGuesses.push(letter);
					this.ltrNotGuessed();
				}
			}
		}
	},

	// function to process after good guess
	ltrGuessed: function() {
		this.displayWord();
		// check if they won (all letters guessed)
	
	},

	// some function to process after bad guess
	ltrNotGuessed: function() {
		document.getElementById("badGuesses").innerHTML = this.bGuesses;
		// check if they lost (out of guesses)
	},

	generateWord: function() {
		this.baby = this.babies[Math.floor(Math.random() * this.babies.length)].toUpperCase();
		console.log("genword" + this.baby)
	},

	displayWord: function() {
		for (var i=0; i < game.baby.length; i++) {
			if (game.goodGuesses.indexOf(this.baby.charAt(i)) != -1) {
			// show letter, guessed
			this.wordInProgress = this.wordInProgress + this.baby.charAt(i);
			} 
			else {
			// show dash, not guessed
			this.wordInProgress = this.wordInProgress + "_ ";
			console.log(this.wordInProgress);
			}
		};
		console.log(this.wordInProgress);
		document.getElementById("wordProgress").innerHTML = this.wordInProgress;
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



