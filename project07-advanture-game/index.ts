#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

class Player1 {
    name : string
    life : number = 100
constructor(name :string){
    this.name = name
}

LifeDecrease(){
   let life = this.life - 10
   this.life = life
    
} 
lifeIncrease(){
    this.life =100
}
}

class Enemy{
    name : string
    life :number = 100
    constructor(name :string){
        this.name =name
    }
    LifeDecrease(){
        let life = this.life - 10
        this.life = life
         
     }
}

console.log(chalk.grey.bold('\t<<<<.__________________.___________________.__________________.>>>>\n'));
console.log(chalk.rgb(255, 200, 0).bold(`\t\t   <<<<==== Welcome To Advanture Game ====>>>>\n`))
console.log(chalk.grey.bold('\t<<<<.__________________.___________________.__________________.>>>>\n'));


const player1 = await inquirer.prompt([{
    name :"playerName",
    type:"input",
    message:  chalk.rgb(255, 250, 0).bold("Player-1\nEnter your name")

}])

const enemy = await inquirer.prompt([{
    name :"player2",
    type:"list",
    message :chalk.rgb(255, 250, 0).bold("\nChoose your opponent\n"),
    choices:[chalk.rgb(100,250,200)("Skeleton"), chalk.rgb(100,250,200)("Assassin"),chalk.rgb(100,250,200)("Zombie")]
}])

const plyer1 = new Player1(player1.playerName)
const enem = new Enemy(enemy.player2)

//skeleton
do{
    if (enemy.player2 === chalk.rgb(100,250,200)("Skeleton") ){
   

    let play = await inquirer.prompt([{
        name :"choice",
        type :"list",
        message :chalk.rgb(255, 250, 0).bold("\nChoose your Action\n"),
        choices:[chalk.red("Attack Enemy"),chalk.blueBright("Life Portion"),chalk.greenBright("Run save your life")]
    }])
if(play.choice === chalk.red("Attack Enemy")){

    let numb = Math.floor(Math.random()*2)

    if (numb > 0){
plyer1.LifeDecrease()

console.log(chalk.bold.red(`\n${chalk.red(plyer1.name)} life remaining ${plyer1.life}...`));
console.log(chalk.bold.green(`${enem.name} life remaining ${enem.life}...\n`));

if(plyer1.life <= 0){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"));
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
   
}
}
if(numb  > 0){
    enem.LifeDecrease()
   
    console.log(chalk.bold.red(`\n${chalk.red(enem.name)} life remaining ${enem.life}...`));
    console.log(chalk.bold.green(`${plyer1.name} life remaining ${plyer1.life}...\n`));
   
    if(enem.life <= 0){
        console.log(chalk.bold.yellow.underline("\n\t\t<<<< You Win! >>>>"))
        console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
        
        process.exit()
    }
  
}
}
if(play.choice === chalk.blueBright("Life Portion")){
plyer1.lifeIncrease()
console.log(chalk.bold.italic.underline.yellow(`You drink health full = ${plyer1.life}\n`));
}

if(play.choice === chalk.greenBright("Run save your life") ){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"))
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
}
}


//assassin
if (enemy.player2 === chalk.rgb(100,250,200)("Assassin") ){
   

    let play = await inquirer.prompt([{
        name :"choice",
        type :"list",
        message :chalk.rgb(255, 250, 0).bold("\nChoose your Action\n"),
        choices:[chalk.red("Attack Enemy"),chalk.blueBright("Life Portion"),chalk.greenBright("Run save your life")]
    }])
if(play.choice === chalk.red("Attack Enemy")){

    let numb = Math.floor(Math.random()*2)
if (numb > 0){
plyer1.LifeDecrease()

console.log(chalk.bold.red(`\n${chalk.red(plyer1.name)} life remaining ${plyer1.life}...`));
console.log(chalk.bold.green(`${enem.name} life remaining ${enem.life}...\n`));

if(plyer1.life <= 0){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"));
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
   
}
}
if(numb  > 0){
    enem.LifeDecrease()
   
    console.log(chalk.bold.red(`\n${chalk.red(enem.name)} life remaining ${enem.life}...`));
    console.log(chalk.bold.green(`${plyer1.name} life remaining ${plyer1.life}...\n`));
   
    if(enem.life <= 0){
        console.log(chalk.bold.yellow.underline("\n\t\t<<<< You Win! >>>>"))
        console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
        
        process.exit()
    }
  
}
}
if(play.choice === chalk.blueBright("Life Portion")){
plyer1.lifeIncrease()
console.log(chalk.bold.italic.underline.yellow(`You drink health full = ${plyer1.life}\n`));
}

if(play.choice === chalk.greenBright("Run save your life") ){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"))
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
}
}

//zombie
if (enemy.player2 === chalk.rgb(100,250,200)("Zombie") ){
   

    let play = await inquirer.prompt([{
        name :"choice",
        type :"list",
        message :chalk.rgb(255, 250, 0).bold("\nChoose your Action\n"),
        choices:[chalk.red("Attack Enemy"),chalk.blueBright("Life Portion"),chalk.greenBright("Run save your life")]
    }])
if(play.choice === chalk.red("Attack Enemy")){

    let numb = Math.floor(Math.random()*2)
if (numb > 0){
plyer1.LifeDecrease()

console.log(chalk.bold.red(`\n${chalk.red(plyer1.name)} life remaining ${plyer1.life}...`));
console.log(chalk.bold.green(`${enem.name} life remaining ${enem.life}...\n`));

if(plyer1.life <= 0){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"))
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
   
}
}
if(numb  > 0){
    enem.LifeDecrease()
   
    console.log(chalk.bold.red(`\n${chalk.red(enem.name)} life remaining ${enem.life}...`));
    console.log(chalk.bold.green(`${plyer1.name} life remaining ${plyer1.life}...\n`));
   
    if(enem.life <= 0){
        console.log(chalk.bold.yellow.underline("\n\t\t<<<< You Win! >>>>"));
        console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
       
        process.exit()
    }
  
}
}
if(play.choice === chalk.blueBright("Life Portion")){
plyer1.lifeIncrease()
console.log(chalk.bold.italic.underline.yellow(`You drink health full = ${plyer1.life}\n`));
}

if(play.choice === chalk.greenBright("Run save your life") ){
    console.log(chalk.bold.redBright.underline("\n\t\t!!!!! Loser! !!!!"));
    console.log(chalk.gray.bold((`\n.______________._______________._____________.`)));
    process.exit()
}
}
}while(true);