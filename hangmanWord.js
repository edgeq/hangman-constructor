//require the hangman letter constructor.
var HangmanLetter = require('./hangmanLetter.js')

//Inside of this file, that requires HangmanLetters
//TO DO: Create an array of hangman letters
//write a function that takes a guess, and
//  for each HangManLetter, marks it guessedCorrectly if it was.
//  write a function that displays all HangmanLetters
//  example: co_ing (function would take this array and take that string )

function HangmanWord (word) {
  this.word = word;
  //Create an array of hangman letters
  this.letters = [];
  //populate array with HangmanLetter for every letter in word.
  for (var i = 0 ; i < word.length ; i++ ) {
    this.letters.push(new HangmanLetter(word[i], false));
  }
  //write a function that takes a guess, and
  //for each HangManLetter, marks it guessedCorrectly if it was.
  this.hiddenWord = function(){
    var hiddenWord = ""
    for (var j = 0 ; j < this.letters.length ; j++ ) {
      hiddenWord += this.letters[j].display();
    }
    return hiddenWord
  }
  //write a function that displays all HangmanLetters
  //  example: co_ing (function would take this array and take that string )
} this.guessAttempt = function(){
  var guessedWord = ""
  for (var k = 0 ; k < this.letters[k]; k++)
    if (this.hiddenWord)
}

module.exports = HangmanWord;

var word = new HangmanWord("muffin");
console.log(word.word);
console.log(word.hiddenWord());

