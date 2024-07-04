#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.grey.bold('\t<<<<.__________________.___________________.__________________.>>>>\n'));
console.log(chalk.rgb(255, 200, 0).bold(`\t\t   <<<<==== Welcome To Currency Converter ====>>>>\n`));
console.log(chalk.grey.bold('\t<<<<.__________________.___________________.__________________.>>>>\n'));
const exchang_Rate = {
    USD: 1,
    KRW: 1351.44,
    QAR: 3.64,
    GBP: 1.26,
    CNY: 7.23,
    THB: 36.57,
    PKR: 278.00
};
let user_Currency_Exchange = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.rgb(255, 250, 0).bold("Enter from currency"),
        choices: ["USD", "KRW", "QAR", "GBP", "CNY", "THB", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.rgb(255, 250, 0).bold("Enter to currency"),
        choices: ["USD", "KRW", "QAR", "GBP", "CNY", "THB", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.rgb(255, 250, 0).bold("Enter your amount")
    }
]);
let fromAmount = exchang_Rate[user_Currency_Exchange.from];
let toAmount = exchang_Rate[user_Currency_Exchange.to];
let amount = user_Currency_Exchange.amount;
let baseAmount = amount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(chalk.yellow.underline(`\nYour Amount Converted ${covertedAmount} From ${user_Currency_Exchange.from} To ${user_Currency_Exchange.to}. `));
console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
