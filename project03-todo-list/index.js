#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.rgb(204, 104, 204)(`   <<<....===========....===========.....===========....>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`  ${chalk.redBright.italic('\t\t <<< Welcome To My Todos >>>>')}`));
console.log(chalk.bold.rgb(204, 104, 204)(`   <<<....===========....===========.....===========....>>>\n`));
let todos = [`Dummy`];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.rgb(204, 136, 240).bold(`\nplease select one you want todo?.\n`),
            choices: ["Addtask", "Update", "Viewtask", "Delete", "Exit"],
        });
        if (ans.select === "Addtask") {
            let addtask = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: chalk.rgb(204, 136, 240).bold(`\nwhat do to wanna add in todo?.`),
            });
            todos.push(addtask.todo);
            console.log(todos);
        }
        if (ans.select === "Update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: chalk.rgb(204, 136, 240).bold(`\nselect update or add item`),
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: chalk.rgb(204, 136, 240).bold(`\nwhat do you wanna add in todo?.`),
            });
            let newTodos = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select === "Viewtask") {
            console.log(todos);
        }
        if (ans.select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: chalk.rgb(204, 136, 240).bold(`\nselect item for delete`),
                choices: todos.map((val) => val),
            });
            let newTodos = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (ans.select === "Exit") {
            let exit = await inquirer.prompt([
                {
                    name: "confirmExit",
                    type: "confirm",
                    message: chalk.rgb(204, 136, 240).bold(`\nDo you want to exit?`)
                },
            ]);
            console.log(chalk.grey('\n___________..__________..___________..__________..___________..__________..__________'));
            if (exit.confirmExit) {
                break;
            }
        }
    } while (true);
}
createtodo(todos);
