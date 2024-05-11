#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number.
// User input for guessing number.
// Compare user input with computer generated number and show result;
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name : "UserGuessNumber",
        type : "number",
        message : "Please guess a number:",
    },
]);
if (answer.UserGuessNumber === randomNumber) {
    console.log("Congragulations!Your guess is correct.")
} else {
    console.log("You guessed wrong number.")
}

const  randomNumbers = Math.floor(Math.random() * 10 + 1); 
const answers = await inquirer.prompt([
    {
        name : "userGuessNumber",
        type : "number",
        message : "Please guess a number between 1-9: ",
    },
]);
if (answers.userGuessNumber === randomNumbers) {
    console.log("Congragulations!Your guess is correct.");
} else {
    console.log("You guessed wrong number.");
}
