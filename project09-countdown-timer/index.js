#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let counter = 0;
console.log((chalk.gray(`   <<<<<<___________________________________________>>>>>>\n`)));
console.log(chalk.bgYellowBright(chalk.black("\t\tWelc0me t0 the countd0wn timer")));
console.log((chalk.gray("   <<<<<<___________________________________________>>>>>>\n")));
const countAns = await inquirer.prompt([{
        name: "start",
        type: "number",
        message: chalk.overline.yellow("Drop A Number To Start Count Down")
    }
]);
if (countAns.start) {
    let starting = setInterval(function () {
        counter++;
        console.log(chalk.red(`\nStart Counting From ${counter}...\n`));
        if (counter === countAns.start) {
            clearInterval(starting);
            console.log((chalk.gray("\n   <<<<<<___________________________________________>>>>>>\n")));
            console.log(chalk.bold.green(`\t1 to ${countAns.start} countd0wn timer end..., Thanks! f0r played. `));
            console.log((chalk.gray("\n   <<<<<<___________________________________________>>>>>>\n")));
        }
    }, 1000);
}
;
