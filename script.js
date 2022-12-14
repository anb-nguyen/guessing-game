let randomNumber = Math.floor(Math.random() * 10) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const tooHighOrLow = document.querySelector(".tooHighOrLow");
const myInput = document.querySelector(".myInput");
const guessSubmit = document.querySelector(".guessSubmit");
const triesLeft = document.querySelector(".attempt");
let guessCount = 1; // keep track of how many guesses the player have
let resetButton;
let attemptsNum = 0;

function checkGuess() {
  const userGuess = Number(myInput.value); //check for valid numbers
  if (guessCount === 1) {
    document.getElementById("guesses").textContent = "Previous guesses: ";
    //guesses.textContent = "Previous guesses: ";
  }

  document.getElementById("guesses").textContent += userGuess + " "; //add previous guessed number and a space between each guess
  attemptsNum += 1;
  if (userGuess === randomNumber) {
    document.getElementById("lastResult").textContent = "Congrats, you got it right!";
    document.getElementById("lastResult").style.backgroundColor = "green";
    document.getElementById("tooHighOrLow").textContent = "";
    document.getElementById("attempt").textContent =
      "You guessed it in " + attemptsNum + " guesses!";
    gameOver();
    //lastResult.style.backgroundColor = "green";
  } else if (guessCount === 3) {
    document.getElementById("lastResult").textContent = "Game over, you used all your tries";
    document.getElementById("tooHighOrLow").textContent = "";
    document.getElementById("attempt").textContent = "";
    gameOver();
  } else {
    document.getElementById("lastResult").textContent = "Wrong number, guess again";
    document.getElementById("lastResult").style.backgroundColor = "red";

    if (userGuess > randomNumber) {
      document.getElementById("tooHighOrLow").textContent = "Last guess was too high!";
      document.getElementById("attempt").textContent = "No. of guesses: " + attemptsNum;
    } else if (userGuess < randomNumber) {
      document.getElementById("tooHighOrLow").textContent = "Last guess was too low!";
      document.getElementById("attempt").textContent = "No. of guesses: " + attemptsNum;
    }
  }

  guessCount++; //add 1 (increment) when the player uses their turn

  myInput.value = ""; //clear the submit field
  myInput.focus(); //focus back to the submit field
}

guessSubmit.addEventListener("click", checkGuess);

//create a function when the game is over
function gameOver() {
  document.getElementById("myInput").disabled = true;
  guessSubmit.disabled = true;
  //document.getElementById("guessSubmit").disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resetButton.classList.add("resetButton"); //add class type for css style
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
//reset the game by disable input and submitt button. Also reset previous guesses
function resetGame() {
  guessCount = 1;
  attemptsNum = 0;
  const resetResultGame = document.querySelectorAll(".resultGame p");
  for (const reGame of resetResultGame) {
    reGame.textContent = " ";
  }

  resetButton.parentNode.removeChild(resetButton);
  document.getElementById("myInput").disabled = false;
  guessSubmit.disabled = false;
  guessSubmit.value = "";
  guessSubmit.focus();
  document.getElementById("lastResult").style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

//console.log(randomNumber);
