const yourGuesses = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetters = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

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
    validateInput(value);
    console.log(guessedLetters);
});

// validate input
const validateInput = function (input) {
    const acceptedLetter = /[a-z]/
    if (input === "") {
        guessMessage.innerText = "You must enter something to guess";
    } else if (input.length > 1) {
        guessMessage.innerText = "You can only guess one letter at a time";
    } else if (!input.match(acceptedLetter)) {
        guessMessage.innerText = "You must enter a letter";
    } else {
        makeGuess(input);
    }
};

const makeGuess = function (guess) {
    let added = true;
    guessedLetters.forEach(letter => {
        if (guess.toUpperCase() === letter.toUpperCase()) {
            guessMessage.innerText = "You already guessed that letter";
            added = false
        }
    });
    if (added === true || guessedLetters.length === 0) {
        guessedLetters.push(guess);
        yourGuesses.innerHTML = guessedLetters.join("&nbsp;&nbsp;&nbsp;&nbsp;");
    }
};