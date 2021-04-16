var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = nextSequence(buttonColours);

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 4);

   return randomNumber;
}
