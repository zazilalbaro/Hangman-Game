<script>

// use bootstrap rows/columns for picture and game / underscores

// define all the possible animals
var babies = ["calf", "fawn", "foal", "hatchling", "joey", "kit", "kitten", "peachick", "piglet", "porcupette", "puggle", "squab", "tadpole", "pup"]

// upon the start of each game, the program will choose a random baby from the babies array
var baby = computerChoices[Math.floor(Math.random() * babies.length)];
var noChar = baby.length;

// starting value each time, variable value gets replaced with each guess
var remainingGuesses = noChar * 3; 

// Display the underscores for each letter
var underscores = "_ "

for (i = 1, i < noChar, i++) {
	underscores = underscores + "_ "
}


