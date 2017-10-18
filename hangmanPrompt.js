var inquirer = require('inquirer');

inquirer.prompt([
     {
      type: "input",
      message: "What is your name?",
      name: "username"//username is the method you call in the promise
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",//confirm is the method you call in the promise
      default: true
    },
    {
      type: "checkbox",
      message: "Which Pokemon have you caught?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],//this array is your list
      name: "caught" // caught is the method we call in the promise
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],//this array is your list
      name: "pokemon" // pokemon is the method we call in the promise
    },
    // Here we ask the user to confirm.
     {
      type: "rawlist",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],//this array is your list
      name: "rawlist" // pokemon is the method we call in the promise
    }
  ]).then( function( answers ) {
    // Use user feedback for... whatever!!
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (answers.confirm) {
      console.log("\nWelcome " + answers.username);
      console.log("Your " + answers.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + answers.username + ", come again when you are more sure.\n");
    }
});
