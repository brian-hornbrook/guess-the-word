const guestedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetters = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

// update word
const updateWordInProgress = function () {
    let blockedWord = "";
    for (let i = 0; i < word.length; i++) {
        blockedWord += "●";
    }
    wordInProgress.innerText = blockedWord;
};
updateWordInProgress();

// guess button
guessButton.addEventListener("click", e => {
    e.preventDefault();
    const value = guessLetters.value;
    guessMessage.innerText = value;
    guessLetters.value = "";
});