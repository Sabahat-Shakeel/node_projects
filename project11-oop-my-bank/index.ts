#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.rgb(50,100,150)(`._____________.._____________.._____________.._____________.._____________.\n`));
console.log(chalk.rgb(50,200,200).bold(`\t<----------- Welcome To My OOP Bank ----------->\n`));
console.log(chalk.rgb(50,100,150)(`._____________.._____________.._____________.._____________.._____________.\n`));


class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited successfully: $${amount}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log('Insufficient funds.');
    } else {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}`);
    }
  }

  credit(amount: number): void {
    this.balance += amount;
    console.log(`Credited: $${amount}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

async function performOperations(account: BankAccount): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: chalk.rgb(155, 136, 0).bold.italic('\nWhat you wanna do'),
      choices: ['Deposit', 'Withdraw', 'Credit', 'Check Balance', 'Exit']
    },
    {
      type: 'input',
      name: 'amount',
      message: chalk.rgb(155, 136, 0).bold.italic('\nEnter the amount:'),
      when: (answers) => answers.operation !== 'Check Balance' && answers.operation !== 'Exit',
      validate: (input: string) => {
        const parsed = parseFloat(input);
        if (isNaN(parsed) || parsed <= 0) {
          return 'Please enter a positive number.';
        }
        return true;
      }
    }
  ]);

  switch (answers.operation) {
    case 'Deposit':
      account.deposit(parseFloat(answers.amount));
      break;
    case 'Withdraw':
      account.withdraw(parseFloat(answers.amount));
      break;
    case 'Credit':
      account.credit(parseFloat(answers.amount));
      break;
    case 'Check Balance':
      console.log(chalk.rgb(50,150,150).italic(`\nCurrent Balance: $${account.getBalance()}`));
      break;
    case 'Exit':
      console.log(chalk.rgb(50,200,200).bold('Thanks For Coming!'));
      console.log((chalk.rgb(50,100,150)(`\n   ..........x..........x...........x............x`)))
      return;
  }

  await performOperations(account);
}

async function main(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'initialBalance',
      message: chalk.rgb(155, 136, 0).bold.italic('\nEnter the initial balance:'),
      validate: (input: string) => {
        const parsed = parseFloat(input);
        if (isNaN(parsed) || parsed < 0) {
          return 'Please enter a non-negative number.';
        }
        return true;
      }
    }
  ]);

  const initialBalance = parseFloat(answers.initialBalance);
  const account = new BankAccount(initialBalance);

  console.log(chalk.rgb(50,150,150).italic.underline(`\nYour account is initial balance is $${answers.initialBalance}.`));
  await performOperations(account);
}

main().catch(error => console.error(error));
