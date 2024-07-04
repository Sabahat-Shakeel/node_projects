#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.rgb(100, 190, 200)(`  ..===================..===================..===================..\n`));
console.log(chalk.rgb(100, 90, 200)(`\t      <<<<< Welcome To Word Counter >>>>\n`));
console.log(chalk.rgb(100, 190, 200)(`  ..===================..===================..===================..\n`));
const answer = await inquirer.prompt([
    {
        name: "WordCounter",
        type: "input",
        message: chalk.rgb(100, 120, 200)("Enter your sentence to counter a word")
    }
]);
const words = answer.WordCounter.trim().split(" ");
console.log(words);
console.log(chalk.rgb(100, 190, 220)(`\n\tYour sentence word count is (${words.length})`));
console.log(chalk.rgb(100, 100, 100)(`\nx..........x..........x..........x..........x..........x`));
