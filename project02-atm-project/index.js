#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let pinCode = 7287;
let myBalance = 40000;
console.log(chalk.grey('  .______________________._______________________.______________________.\n'));
console.log(chalk.yellow(`\t\t<<<<------------ Welcome To ATM ------------>>>>`));
console.log(chalk.grey('  .______________________._______________________.______________________.\n'));
console.log(chalk.rgb(155, 136, 100)(`\tPIN Code: ${pinCode}`));
console.log(chalk.rgb(155, 136, 100)(`\tYour current balance is: ${myBalance}\n`));
let ansPin = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.rgb(155, 136, 0)("Enter your pin code:"),
        type: "number"
    }
]);
if (ansPin.pin === pinCode) {
    console.log(chalk.green("Your pin code is correct!"));
    console.log("\n");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.rgb(155, 136, 0)("What do you want to do?!"),
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdraw = await inquirer.prompt([
            { name: "amount",
                message: chalk.rgb(155, 136, 0)("\nSelect the amount:"),
                type: "list",
                choices: [10000, 20000, 30000, 40000, 50000]
            }
        ]);
        if (withdraw.amount > myBalance) {
            console.log(chalk.redBright.underline("Insufficient amount!"));
        }
        else {
            let amountLeft = myBalance - withdraw.amount;
            console.log(chalk.rgb(155, 136, 100).underline(`\nThe remaining balance is: ${amountLeft}`));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.rgb(155, 136, 100).underline(`\nYour current balance is: ${myBalance}`));
    }
    console.log(chalk.grey.bold(`\n.............~~~~~~~~~~..............~~~~~~~~~~...............~~~~~~~~~~..............`));
}
else {
    console.log(chalk.red("\nPin Code is inccorect!\nPlease enter the correct Pin Code!"));
    console.log(chalk.redBright(`x_______X________x_______X_______X_______x`));
}
