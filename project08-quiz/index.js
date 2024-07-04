#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let totalMarks = 0;
console.log(chalk.gray.bold("\t<<<<<<===========================================================>>>>>>\n"));
console.log(chalk.redBright `\t\t\t   <<<<==== Welcome To Quiz ====>>>\n`);
console.log(chalk.gray.bold("\t<<<<<<===========================================================>>>>>>\n"));
//Enroll Student;
const name = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: chalk.red.bold("Enter Your Name")
    }, {
        name: "rollNo",
        type: "input",
        message: chalk.red.bold("Enter Your Roll No")
    }
]);
//Options of Quiz level;
let quizLevel = await inquirer.prompt([
    {
        name: "options",
        type: "list",
        message: chalk.bgRedBright.bgGreenBright('\nQuiz Level:'),
        choices: [chalk.greenBright("Basic"), chalk.blueBright("Medium"), chalk.red("Advance")],
    }
]);
//Basic {Quiz 3 Questions You Can Add If You Wanna More Questions}
if (quizLevel.options === chalk.greenBright("Basic")) {
    const ans0 = await inquirer.prompt([
        {
            name: "ans1",
            type: "list",
            message: chalk.rgb(255, 136, 0).bold("\n\tQ1.Typescript is a _______ of javascript\n"),
            choices: [chalk.grey("A.Superset"), chalk.grey("B.Dynamic language"), chalk.grey("C.Statics typing"), chalk.grey("D.Generic type")],
        }
    ]);
    let answer = chalk.grey("A.Superset");
    if (ans0.ans1 === `${answer}`) { //template literals;
        totalMarks += 5;
        const ans1 = await inquirer.prompt([
            {
                name: "ans2",
                type: "list",
                message: chalk.rgb(255, 136, 0).bold("\n\tQ2.What is TypeScript primarily used for\n"),
                choices: [chalk.grey("A.Statics typing"), chalk.grey("B.Dynamic typing"), chalk.grey("C.Statics language"), chalk.grey("D.Dynamic language"),]
            }
        ]);
        let ans = chalk.grey("A.Statics typing");
        if (ans1.ans2 === `${ans}`) {
            totalMarks += 5;
            const ans2 = await inquirer.prompt([
                {
                    name: "ans3",
                    type: "list",
                    message: chalk.rgb(255, 136, 0).bold("\n\tQ3.Which command would you use to install TypeScript globally using npm\n"),
                    choices: [chalk.grey("A.npm install -g typescript"), chalk.grey("B.npm i install typescript"), chalk.grey("C.npm i typescript"), chalk.grey("D.npx i install -g typescript"),]
                }
            ]);
            let q3 = chalk.grey("A.npm install -g typescript");
            if (ans2.ans3 === `${q3}`) {
                totalMarks += 5;
            }
        }
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.green.underline(`\nTotal marks:${totalMarks} out of 15`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
    else {
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.bold.red("\nwrong answer"));
        console.log(chalk.red.underline(`\nTotal marks:${totalMarks--} out of 15)\n`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
    //Medium {You Can Add If You Wanna More Questions}
}
else if (quizLevel.options === chalk.blueBright("Medium")) {
    const Medium = await inquirer.prompt([
        {
            name: "Q1",
            type: "list",
            message: chalk.rgb(255, 136, 0).bold("\n\tQ1.How do you denote a variable as readonly in TypeScript\n"),
            choices: [chalk.grey("A.Modules"), chalk.grey("B.Readonly"), chalk.grey("C.Varaible denote"), chalk.grey("D.Typescript features"),]
        }
    ]);
    let anss = chalk.grey("B.Readonly");
    if (Medium.Q1 === `${anss}`) {
        totalMarks += 5;
        const medium = await inquirer.prompt([
            {
                name: "Q2",
                type: "list",
                message: chalk.rgb(255, 136, 0).bold("\n\tQ2.How do you specify that a function does not return anything in TypeScript\n"),
                choices: [chalk.grey("A.Function a = (){}:number"), chalk.grey("B.Let a = func(){}"), chalk.grey("C.function myFunc():void"), chalk.grey("D.function myFunc(): unknown"),]
            }
        ]);
        let func = chalk.grey("C.function myFunc():void");
        if (medium.Q2 === `${func}`) {
            totalMarks += 5;
            const medIum = await inquirer.prompt([
                {
                    name: "m3",
                    type: "list",
                    message: chalk.rgb(255, 136, 0).bold("\n\tQ3.Which TypeScript feature allows for checking the type of a variable at runtime\n"),
                    choices: [chalk.grey("A.TypeOf"), chalk.grey("B.Type Unknown"), chalk.grey("C.Type guardy"), chalk.grey("D.Runtime type")]
                }
            ]);
            let ansM3 = chalk.grey("C.Type guardy");
            if (medIum.m3 === `${ansM3}`) {
                totalMarks += 5;
            }
        }
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.green.underline(`\nTotal marks:${totalMarks} out of 15`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
    else {
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.redBright.bold("\nwrong answer"));
        console.log(chalk.red.underline(`\nTotal marks:${totalMarks--} out of 15)`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
    //Advance {You Can Add If You Wanna More Questions}
}
else if (quizLevel.options === chalk.red("Advance")) {
    let ad1 = await inquirer.prompt([
        {
            name: "advance1",
            type: "list",
            message: chalk.rgb(255, 136, 0).bold("\n\tQ1.In TypeScript, what does an enum allow you to do\n"),
            choices: [chalk.grey("A.Store a set of named constants, numeric or string"), chalk.grey("B.Store a simple varibale"), chalk.grey("C.Store a nested object"), chalk.grey("D.Make an object with primitive type"),]
        }
    ]);
    let adans = chalk.grey("A.Store a set of named constants, numeric or string");
    if (ad1.advance1 === `${adans}`) {
        totalMarks += 5;
        const ad2 = await inquirer.prompt([
            {
                name: "advance2",
                type: "list",
                message: chalk.rgb(255, 136, 0).bold("\n\tQ2.How can you allow an object to have any number of properties of a given type in TypeScript\n"),
                choices: [chalk.grey("A.{[key: any]: string;}"), chalk.grey("B.{[key: string]: any;}"), chalk.grey("C.[property: string]: string;}"), chalk.grey("D.{[value: string]: string;}\n"),]
            }
        ]);
        let adans2 = chalk.grey("B.{[key: string]: any;}");
        if (ad2.advance2 === `${adans2}`) {
            totalMarks += 5;
            const ad3 = await inquirer.prompt([
                {
                    name: "advance3",
                    type: "list",
                    message: chalk.rgb(255, 136, 0).bold("\n\tQ3.What does the extends keyword allow you to do in TypeScript\n"),
                    choices: [chalk.grey("A.Add methods to an existing function"), chalk.grey("B.Increase the value a number variable"), chalk.grey("C.Create a subclass from a superclass"), chalk.grey("D.Extend the length of an array\n"),]
                }
            ]);
            let adans3 = chalk.grey("C.Create a subclass from a superclass");
            if (ad3.advance3 === `${adans3}`) {
                totalMarks += 5;
            }
        }
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.green.underline(`\nTotal marks:${totalMarks} out of 15`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
    else {
        console.log(chalk.grey('__________________.___________________.__________________.'));
        console.log(chalk.rgb(155, 136, 0).bold("\nStudent Name:"), `${name.Name}\n`, chalk.rgb(155, 136, 0).bold("\nRoll No:"), `${name.rollNo}`);
        console.log(chalk.redBright.bold("\nwrong answer"));
        console.log(chalk.red.underline(`\nTotal marks:${totalMarks--} out of 15)`));
        console.log(chalk.grey('__________________.___________________.__________________.'));
    }
}
