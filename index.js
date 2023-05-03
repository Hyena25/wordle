document.addEventListener("DOMContentLoaded", function() {
// Generate a random 5-letter word
const wordList = ["apple", "banana", "cherry", "grape", "lemon", "melon", "orange", "peach", "pear", "plum"];
const word = wordList[Math.floor(Math.random() * wordList.length)];

// Initialize the number of guesses
let numGuesses = 0;

// Get the input and result containers from the HTML
const guessInput = document.getElementById("guess-input");
const resultsContainer = document.getElementById("results-container");

// Function to check the guess against the word
function checkGuess(guess) {
  // Check if the guess is the same as the word
  if (guess === word) {
    resultsContainer.innerHTML += "<p>Congratulations, you guessed the word!</p>";
    return true;
  }
  
  // Initialize arrays for storing correctly guessed letters and unmatched letters
  let correctLetters = [];
  let unmatchedLetters = [];
  
  // Check each letter in the guess
  for (let i = 0; i < guess.length; i++) {
    // If the letter is in the word and not already guessed correctly, add it to the correctLetters array
    if (word.includes(guess[i]) && !correctLetters.includes(guess[i])) {
      correctLetters.push(guess[i]);
    }
    // If the letter is not in the word or has already been guessed correctly, add it to the unmatchedLetters array
    else {
      unmatchedLetters.push(guess[i]);
    }
  }
  
  // Sort the arrays in alphabetical order
  correctLetters.sort();
  unmatchedLetters.sort();
  
  // Create a new string with the correctly guessed letters and unmatched letters
  const result = correctLetters.join("") + unmatchedLetters.join("");
  
  // Add the guess and result to the results container
  resultsContainer.innerHTML += `<p>${guess.toUpperCase()}: ${result}</p>`;
  
  // Increment the number of guesses
  numGuesses++;
  
  // Check if the player has run out of guesses
  if (numGuesses === 6) {
    resultsContainer.innerHTML += `<p>Sorry, you ran out of guesses. The word was ${word.toUpperCase()}.</p>`;
    return true;
  }
  
  return false;
}

// Function to handle a guess
function guess() {
  // Get the guess from the input field and clear the input field
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";
  
  // Check if the guess is valid (5 letters)
  if (guess.length !== 5) {
    resultsContainer.innerHTML += "<p>Please enter a 5-letter word.</p>";
    return;
  }
  
  // Check the guess against the word
  if (checkGuess(guess)) {
    // Disable the input and button if the game is over
    guessInput.disabled = true;
    document.getElementById("guess-button").disabled = true;
  }
}

})