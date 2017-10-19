//provide a way to create hangman letters
//properties that make up a hangman letter.
function HangmanLetter(letter, guessedCorrectly) {
    //It IS a letter.
    this.letter = letter;
    //Can be guessed or not (boolean)
    this.guessedCorrectly = guessedCorrectly;
    //Can display as its letter if guessed correctly (otherwise as '_')
    this.display = function() {
      if (this.guessedCorrectly) {
        return this.letter
      } else {
        return '_'
      };
    };
  };

  module.exports = HangmanLetter
//Inside of another file, that requires HangmanLetters
//TO DO: Create an array of hangman letters
//write a function that takes a guess, and
//  for each HangManLetter, marks it guessedCorrectly if it was.
//  write a function that displays all HangmanLetters
//  example: co_ing (function would take this array and take that string )
