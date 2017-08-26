

var game = {
	babies: ["calf", "fawn", "foal", "hatchling", "joey", "kit", "kitten", "peachick", "piglet", "porcupette", "puggle", "squab", "tadpole", "pup"],
	wins: 0,
	losses: 0,
	word: null,
	badGuesses: [],
	correctGuesses: [],
	userLtr: null,

	reset: function() {
		this.word = null;
		this.generateWord();
		this.badGuesses = [];
		this.goodGuesses = [];
	},

	userGuess: function(letter) {
		var isCorrect = false;
		// Check if letter is valid.
		if () {
			// check if letter already guessed.
			if (!this.badGuesses.indexOf(letter) && !this.goodGuesses.indexOf(letter)) {
				// Determine if guess is correct.
				if (this.word.indexOf(letter) != -1) {
					// Good Guess
					isCorrect = true;
					this.goodGuesses.push(letter);
				} 
					// check if they won (all letters guessed)
				else {
					// Bad Guess
					isCorrect = false;
					this.badGuesses.push(letter);
					// check if they lost (out of guesses)
				}
			}
		}
	},


	// function to process after good guess

	// some function to process after bad guess

	generateWord: function() {
		this.word = this.babies[Math.floor(Math.random() * this.babies.length)].toUpperCase();
	}
};


//Game Begins with New Game button
document.getElementById("newGame").addEventListener("click", function() {
	game.reset();
};

document.onkeyup = function(event) {
    game.userltr = String.fromCharCode(event.keyCode).toUpperCase();
// bind event to process user guess
	game.userGuess(userltr);


for (var i=0; i < game.word.length; i++) {
	if (game.goodGuesses.indexOf(game.word.charAt(i)) != -1) {
		// show letter, it was  guessed
	} else {
		// show dash, letter not guessed
	}
}





window.onload = function() {
// use bootstrap rows/columns for picture and game / underscores

// define all the possible animals and starting values
// var babies = [
// 	["C","A","L","F"], 
// 	["F", "A", "W", "N"],
// 	["F", "O", "A", "L"],
// 	["H", "A", "T", "C", "H", "L", "I", "N", "G"],
// 	["J", "O", "E", "Y"],
// 	["K", "I", "T"],
// 	["K", "I", "T", "T", "E", "N"],
// 	["P", "E", "A", "C", "H", "I", "C", "K"],
// 	["P", "I", "G", "L", "E", "T"],
// 	["P", "O", "R", "C", "U", "P", "E", "T", "T", "E"],
// 	["P", "U", "G", "G", "L", "E"],
// 	["S", "Q", "U", "A", "B"],
// 	["T", "A", "D", "P", "O", "L", "E"],
// 	["P", "U", "P"]
// ];

// var wins = 0;
// var losses = 0;



	// upon the start of each game, the program will choose a random baby from the babies array
	// starting value each time, variable value gets replaced with each guess
	var baby = babies[Math.floor(Math.random() * babies.length)];
	var babyName = new Array(baby.length);
	var remainingGuesses = baby.length * 2;
	var correctGuesses = 0
	

	// console.log(baby, babyName, remainingGuesses, correctGuesses)

	// Display the underscores for each letter
	for (i = 1; i < babyName.length; i++) {
		babyName[i] = "_ ";
		// console.log(babyName)
	}

	function displayName () {
		for (var i = 0; i < babyName.length; i++) {
			var babyChar = document.getElementById("word");
			// console.log(babyChar);
			var babyLtr = document.createTextNode(babyChar[i]);
			// console.log(babyLtr);
			babyChar.appendChild(babyLtr);
			// console.log(babyChar);
		}
	}
 
	// if then statement for when they guess letters - if they guess right, then the loop will input that letter instead of the _

	document.onkeyup = function(event) {
      	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		
		
			// console.log(userGuess, baby, "remaining guesses:",remainingGuesses, "correctguesses:", correctGuesses);
		
		var checkLtr = function() {
			for (var i = 0; i < baby; i++) {
				if (baby[i] === userGuess) {
					babyName[i] = userGuess + " ";
					var score = true;
				}
			userGuess = "";
			}

			// deletes the guessfield
			var babyChar = document.getElementById("word");
			babyChar.innerHTML="";
			displayName();

		}
	// 		for(i=0; i<baby.length; i++) {
	// 			if (userGuess === baby[i]) {
	// 				var progress[i] = userGuess + " "
	// 				// wordChar = wordChar + userGuess + " ";
	// 				correctGuesses++; //this works
	// 			}
	// 			else {
	// 				progress[i] = "_ "
	// 				// wordChar = wordChar + "_ ";
	// 			}

				
	// 			document.getElementById("word").innerHTML = progress;
			
	// 		}

	// 		remainingGuesses--;
	// 		console.log(userGuess, baby, "remaining guesses:",remainingGuesses, "correctguesses:", correctGuesses);
	

		 
	};

});

};



// // gameStats
// function updateGameStats() {
// var html =
//   "<p>Wins: " + wins + "</p>" +
//   "<p>Losses: " + losses + "</p>";
// document.getElementById("gameStats").innerHTML = html;
// }





// 	//it will use nested if then statements that will check if their guess is in position 0, 1, 2, etc. until the length of the baby
// updateGameStats();


// // button for new game will create new baby and reset guesses but not game stats


// };
