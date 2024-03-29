// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Variable to keep track of the number of attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
	// Get the user's guess from the input field and convert it to an integer
	const userGuess = parseInt(document.getElementById("guessField").value);
	// Get the message element where feedback will be displayed
	const message = document.getElementById("message");

	// Check if the user's guess is not a number or is outside the valid range
	if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		message.textContent = "Please enter a valid number between 1 and 100.";
		return;
	}
	// Increment the number of attempts
	attempts++;

    // Check if the user's guess matches the random number
	if (userGuess === randomNumber) {
		message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;

		disableInput(); // Disable the input field and submit button

	} else if (userGuess < randomNumber) {
		message.textContent = "Too low! Try again.";
	} else {
		message.textContent = "Too high! Try again.";
	}
}

// Function to disable the input field and submit button after the game is won
function disableInput() {
	document.getElementById("guessField").disabled = true; // Disable the input field
	document.querySelector("button").disabled = true;  // Disable the submit button
}
