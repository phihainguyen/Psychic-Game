
//variables to needed for game to function

 var wins = 0;
 var losses = 0;
 var remaining = 12;
 var userGuess = [];
 var bank = "abcdefghijklmnopqrstuvwxyz";
 var randomPick = bank.charAt(Math.floor(Math.random() * 26))

 // Create variables that hold references to the places in the HTML where we want to display things.

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var remainingText = document.getElementById("remaining-text");
    var guessedText = document.getElementById("guessed");

   
    

    function choose(letter){

    if(randomPick===letter){
      wins++;
      remaining = 12;
      userGuess = [];
      randomPick = bank.charAt(Math.floor(Math.random()*26)) 


}

else{
  remaining--;
}
if (remaining === 0){
  losses++;
  remaining = 12;
  userGuess=[];
}
//add to the index for what letter user picks
userGuess.push(letter)

loop()
}

function loop(){

winsText.textContent = "Wins: " +wins
lossesText.textContent = "Losses: " +losses
remainingText.textContent = "You have " + remaining + " left."
guessedText.textContent = "You've guessed " + userGuess  
}

loop()

function handleKeypress(event){

    choose(event.key);}

document.addEventListener("keypress", handleKeypress) 








      