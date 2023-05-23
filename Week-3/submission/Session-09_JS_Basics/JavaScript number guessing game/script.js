function playGuessingGame(targetNumber, numberOfGuesses = 10) {
  // Generate a random number between 1 and 100 as the targetNumber if not provided
  if (!targetNumber) {
    targetNumber = Math.floor(Math.random() * 100) + 1;
  }

  // Keep track of the remaining guesses and the user's guess
  let remainingGuesses = numberOfGuesses;
  let guess;

  // Loop until the user runs out of guesses or guesses the targetNumber
  while (remainingGuesses > 0) {
    if (remainingGuesses === 10) {
      guess = prompt(
        `Guess a number between 1 and 100. You have ${remainingGuesses} guesses remaining. `
      );
    } else {
      guess = prompt(
        `${
          guess > targetNumber
            ? guess + " greater than target Number"
            : guess + " less than target Number"
        }. You have ${remainingGuesses} guesses remaining. `
      );
    }

    // Check if the user cancels the prompt
    if (guess === null || guess === undefined) {
      return 0;
    }

    // Check if the guess is valid
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    // Decrement the remaining guesses and check if the guess is correct
    remainingGuesses--;
    if (guess == targetNumber) {
      alert(
        `Congratulations! You guessed the number in ${
          numberOfGuesses - remainingGuesses
        } guesses.`
      );
      return;
    }
  }

  // The user has run out of guesses
  alert(`Sorry, you ran out of guesses. The number was ${targetNumber}.`);
}
playGuessingGame();
