const yourGuesses = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetters = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingText = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
let guessingWord = "";
const guessedLetters = [];
let guessesCount = 8;

// start game with all hidden letters
const startGame = function () {
    let blockedWord = "";
    for (let i = 0; i < word.length; i++) {
        guessingWord += "●";
    }
    wordInProgress.innerText = guessingWord;
};
startGame();

// guess button
guessButton.addEventListener("click", e => {
    e.preventDefault();
    const value = guessLetters.value;
    guessMessage.innerText = value;
    guessLetters.value = "";
    validateInput(value);
});

// check if input is valid
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

// guess call
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
        checkWord(guess);
    }
};

// run the game one turn
const checkWord = function (guess) {
    let updateWord = "";
    let won = true;
    for (let i = 0; i < word.length; i++) {
        if (guessingWord[i] !== "●") {
            updateWord += guessingWord[i]
        }
        else if (guess.toUpperCase() === word[i].toUpperCase()) {
            updateWord += guess.toLowerCase();
        } else {
            updateWord += "●";
            won = false;
        }
    }
    guessingWord = updateWord;
    rungame(won);
};

// check if game is over
const rungame = function (won) {
    guessesCount -= 1;
    if (won === true) {
        gameOver();
        guessMessage.innerHTML = `<p class="highlight">You guessed the word! Contgrats!</p>`;
    } else {
        wordInProgress.innerText = guessingWord;
        remainingGuesses.innerText = `${guessesCount} guesses`;
    }
};

const gameOver = function (notFinished) {
    yourGuesses.innerText = "";
    remainingText.innerText = "";
};