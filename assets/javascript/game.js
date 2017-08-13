

// use bootstrap rows/columns for picture and game / underscores

// define all the possible animals
var babies = ["calf", "fawn", "foal", "hatchling", "joey", "kit", "kitten", "peachick", "piglet", "porcupette", "puggle", "squab", "tadpole", "pup"]

// upon the start of each game, the program will choose a random baby from the babies array
var baby = babies[Math.floor(Math.random() * babies.length)];
var noChar = baby.length;

	console.log(baby);
// starting value each time, variable value gets replaced with each guess
var remainingGuesses = noChar * 3; 
	
	console.log(remainingGuesses);
// Display the underscores for each letter
var underscores = "_ ";

for (i = 1; i < noChar; i++) {
	underscores = underscores + "_ "
}

	console.log(underscores)
