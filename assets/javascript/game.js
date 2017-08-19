window.onload = function() {
// use bootstrap rows/columns for picture and game / underscores

// define all the possible animals and starting values
var babies = [
	["C","A","L","F"], 
	["F", "A", "W", "N"],
	["F", "O", "A", "L"],
	["H", "A", "T", "C", "H", "L", "I", "N", "G"],
	["J", "O", "E", "Y"],
	["K", "I", "T"],
	["K", "I", "T", "T", "E", "N"],
	["P", "E", "A", "C", "H", "I", "C", "K"],
	["P", "I", "G", "L", "E", "T"],
	["P", "O", "R", "C", "U", "P", "E", "T", "T", "E"],
	["P", "U", "G", "G", "L", "E"],
	["S", "Q", "U", "A", "B"],
	["T", "A", "D", "P", "O", "L", "E"],
	["P", "U", "P"]
];

var wins = 0;
var losses = 0;

//Game Begins with New Game button
document.getElementById("newGame").addEventListener("click", function() {

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
