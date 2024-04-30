#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;

console.log(chalk.magenta.bold("\n \t Wellcome to CodeWith Mr Arain - Todo-List Applicaton\n"));

while(condition){
    let addTask = await inquirer.prompt([
        {
              name: "task",
              type: "input",
              message: chalk.green("Enter your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

    let addMoreTask = await inquirer.prompt([
        {
              name: "addmore",
              type: "confirm",
              message: chalk.bgYellow("Do you want to add more task ?"),
              default: "false"   
        }
    ]);
    condition = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todoList);