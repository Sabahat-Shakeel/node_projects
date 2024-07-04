#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.rgb(50, 100, 150)(`._____________.._____________.._____________.._____________.._____________.\n`));
console.log(chalk.rgb(50, 200, 200).bold(`\t<----------- Welcome To Number Guessing Game ----------->\n`));
console.log(chalk.rgb(50, 100, 150)(`._____________.._____________.._____________.._____________.._____________.\n`));
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: (chalk.rgb(50, 150, 150).italic("Please guess a number between 8-1:")),
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.rgb(0, 200, 10)("\n\tCongratulation! you guessed right number."));
}
else {
    console.log(chalk.red("\n\tyou guessed! wrong number."));
}
console.log((chalk.rgb(50, 100, 150)(`\n   ..........x..........x...........x............x`)));
