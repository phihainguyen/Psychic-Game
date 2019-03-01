var computerChoices = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 // Creating variables to hold the number of wins, losses, and guesses left, and what has been guesses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var guessed = [];





   
  

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var guessedText = document.getElementById("guessed");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(one) {

      // Determines which key was pressed.
      var userGuess = one.key.toLowerCase();

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      for (var i = 0; i <= 12; i++) {
      	0[i]
      }
      if (userGuess === computerChoices) {
        } 
      if (userGuess === computerGuess) {
          wins++;
        } else {
          guessesLeft--;
        }
	if (guessesLeft === 0){
	losses++;
}
        // Hide the directions

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;

        computerChoiceText.textContent = "The computer chose: " + computerGuess;

        winsText.textContent = "wins: " + wins;

        lossesText.textContent = "losses: " + losses;

        guessesLeftText.textContent = "guesses left " +guessesLeft;
        guessedText.textContent = "Your guesses so far " + guessed.push(userGuess);

      }
    ;