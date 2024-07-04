#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";


console.log( chalk.rgb(50,110,140).bold(`\t<<<<<<<<-----------><-----------><-----------><---------->>>>>>>\n`));
console.log(chalk.rgb(50,110,100).italic(`\t\t  <<<<<< Welcome To Simple Calculator >>>>>>\n`));
console.log( chalk.rgb(50,110,140).bold(`\t<<<<<<<<-----------><-----------><-----------><---------->>>>>>>\n`));


const answer = await inquirer.prompt([
{message : chalk.rgb(50,110,140)("\nEnter the first number"), type: "number", name: "firstNumber"},
{message :  chalk.rgb(50,110,140)("\nEnter the second number"), type: "number", name: "secondNumber"},

{message:  chalk.rgb(50,110,140)("\nSelect one the operator to perfrom operations"),
type : "list",
name: "operator",
choices: ["Addition", "Substraction", "Multiplication", "Division"],
},
]);

if (answer.operator === "Addition"){
    console.log (answer.firstNumber + answer.secondNumber);
}  else if (answer.operator === "Substraction"){
     console.log(chalk.rgb(50,110,100).italic(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication"){
    console.log (chalk.rgb(50,110,100).italic(answer.firstNumber * answer.secondNumber));
}else if (answer.operator === "Division"){
    console.log (chalk.rgb(50,110,100).italic(answer.firstNumber / answer.secondNumber));
} else {console.log (chalk.rgb(50,110,100).italic("Please press the valid number"));
    
}

console.log(chalk.grey(`\n.._____________________..._____________________..`));