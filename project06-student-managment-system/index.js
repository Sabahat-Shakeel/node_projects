#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// first condidates register their account to access the login page
console.log(chalk.gray.bold((`  <<<<<<<<--------------------------------->>>>>>>>\n`)));
console.log(chalk.bgRedBright(chalk.white.bold("\tWelcome to student management system\n")));
console.log(chalk.gray.bold((`  <<<<<<<<--------------------------------->>>>>>>>\n`)));
console.log(chalk.blueBright(`  Register Portal`));
let registerEmail = await inquirer.prompt([
    {
        name: "name1",
        type: "input",
        message: chalk.rgb(255, 136, 0).bold("What's you first name.")
    },
    {
        name: "name2",
        type: "input",
        message: chalk.rgb(255, 136, 0).bold("What's your last name.")
    },
    {
        name: "email",
        type: "input",
        message: chalk.rgb(255, 136, 0).bold("Enter your email!")
    },
    {
        name: "date",
        type: "input",
        message: "Enter your date of birth (DD/MM/YY)"
    },
    {
        name: "country",
        type: "list",
        message: chalk.rgb(255, 136, 0).bold("Country?."),
        choices: ["Karachi", "Lahore", "Islamabad"]
    },
    {
        name: "password",
        type: "password",
        message: chalk.rgb(255, 136, 0).bold("Create your password!")
    },
]);
console.log(chalk.yellow("Registered Successfully\n"));
let login = await inquirer.prompt(// login your account to access the form
[
    {
        name: "login",
        type: "input",
        message: chalk.rgb(255, 136, 0).bold("Login Your email adddress!")
    },
    {
        name: "password",
        type: "password",
        message: chalk.rgb(255, 136, 0).bold("Enter your password to login")
    }
]);
if (login.login === registerEmail.email && login.password === registerEmail.password) {
    console.log(chalk.green("login successfully\n")); //checking if condidates email and password is equal to registered email and password
    console.log(chalk.black.bgYellow.italic("\tWelcome to abc course from xyz campus\n\tFill the form with complete detail...\n"));
    let candidates = await inquirer.prompt([
        {
            name: "Student Name",
            type: "input",
            message: chalk.rgb(255, 100, 0).bold("Enter your full name")
        },
        {
            name: "Cnic",
            type: "input",
            message: chalk.rgb(255, 100, 0).bold("National Identity Number!")
        },
        {
            name: "Qualification",
            type: "input",
            message: chalk.rgb(255, 100, 0).bold("Add Your Education!")
        },
        {
            name: "Course",
            type: "checkbox",
            message: chalk.rgb(255, 100, 0).bold("which course u do apply choice two.(once is compulsory)"),
            choices: ["Digital Marketing", "Mobile Web Marketing", "Search Engine Optimization(SEO)", "Google Ads"]
        },
        {
            name: "Payment Method",
            type: "number",
            message: chalk.rgb(255, 100, 0).bold("Payment method\n Enter your account number / iban number")
        },
        {
            name: "Submitted Your Form",
            type: "input",
            message: chalk.rgb(255, 100, 0).bold("Enter to submitt your form\n")
        }
    ]);
    console.log(chalk.green("Sucessfully Submitted Your Form\n"));
    let view = await inquirer.prompt([
        {
            name: "ViewForm",
            type: "list",
            message: chalk.rgb(255, 100, 0).bold("View Your Form."),
            choices: ["View"]
        }
    ]);
    if (view.ViewForm) {
        console.table(candidates);
    }
}
else {
    console.log(chalk.red("wrong email or password !"));
}
