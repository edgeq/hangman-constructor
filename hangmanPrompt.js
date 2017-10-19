var inquirer = require('inquirer');
var HangmanWord = require('./hangmanWord.js');

var hangmanWord = new HangmanWord("hello");

console.log("Welcome to hangman. Type a letter to guess a word")

function displayWord() {
    console.log(hangmanWord.hiddenWord());
};

gameAsk();
displayWord();

function gameAsk() {
    inquirer.prompt([{
        type: "input",
        message: "Type a letter to guess the word\n",
        name: "letterGuess"
    }]).then(function(answers) {

        if (hangmanWord.guessAttempt(answers.letterGuess)) {
            console.log('good guess!');
        } else {
            console.log('wrong letter. try again');
        };

        if (hangmanWord.isFinished()) {

            console.log("You guessed the word");
            endGame();
        } else {

            gameAsk();
        };
        displayWord();
    });

    function endGame() {
        console.log('you win');
    };
};
