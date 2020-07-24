const number = 8;
const stringGuess = prompt("Guess a number!");
const guess = Number(stringGuess);

if (guess === number) {
	alert("YOU GUESSED IT !!");
}

else if (guess < number) {
	alert("Too low. Try again.")
}

else {
	alert("Too high. Try again.")
}