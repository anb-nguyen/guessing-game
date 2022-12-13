let randomNumber = Math.floor(Math.random() * 10) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const tooHighOrLow = document.querySelector(".tooHighOrLow");
const myInput = document.querySelector(".myInput");
const guessSubmit = document.querySelector(".guessSubmit");
let guessCount = 1;

function checkGuess() {
  const userGuess = Number(myInput.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " "; //add previous guessed number and a space between each guess

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congrats, you got it right!";

    lastResult.style.backgroundColor = "green";
  } else {
    lastResult.textContent = "Wrong number, guess again";
    lastResult.style.backgroundColor = "red";
    if (userGuess > randomNumber) {
      tooHighOrLow.textContent = "Last guess was too high!";
    } else if (userGuess < randomNumber) 7;
    tooHighOrLow.textContent = "Last guess was too low!";
  }

  guessCount++; //add 1 (increment) when the player uses their turn
  myInput.value = ""; //clear the submit field
  myInput.focus(); //focus back to the submit field
}

guessSubmit.addEventListener("click", checkGuess);
console.log(randomNumber);
