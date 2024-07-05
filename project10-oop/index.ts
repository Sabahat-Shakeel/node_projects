#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

class Person {
    constructor(public id: number, public name: string, public age: number) {}
}

class Student extends Person {
    constructor(id: number, name: string, age: number, public courses: string[] = []) {
        super(id, name, age);
    }

    addCourse(course: string) {
        this.courses.push(course);
    }
}

class Teacher extends Person {
    constructor(id: number, name: string, age: number, public department: string) {
        super(id, name, age);
    }
}

const students: Student[] = [];
const teachers: Teacher[] = [];

console.log(chalk.grey('  \t.______________________._______________________.______________________.'));
console.log(chalk.grey('  \t.______________________._______________________.______________________.\n'));
console.log(chalk.yellow(`\t\t<<<<------ Welcome To University Management ------>>>>`));
console.log(chalk.grey('  \t.______________________._______________________.______________________.'));
console.log(chalk.grey('  \t.______________________._______________________.______________________.\n'));


async function option() {
    const answer = await inquirer.prompt({
        name: 'options',
        type: 'list',
        message: chalk.rgb(155,136,0)('\nWhat should you do'),
        choices: [ chalk.italic.yellowBright('Add Student'), chalk.italic.yellowBright('Add Teacher'),  chalk.italic.yellowBright('View Students'),  chalk.italic.yellowBright('View Teachers'), chalk.italic.yellowBright('Exit')],
    });

    switch (answer.options) {
        case chalk.italic.yellowBright('Add Student'):
            await addStudent();
           break;
        case chalk.italic.yellowBright('Add Teacher'):
            await addTeacher();
            break;
      
        case chalk.italic.yellowBright('View Students'):
            viewStudents();
            break;
        case  chalk.italic.yellowBright('View Teachers'):
            viewTeachers();
            break;
     
        case  chalk.italic.yellowBright('Exit'):
        console.log(chalk.gray(`\n\tx_______X________x_______X_______X_______x`))
        process.exit();
    }

    await option();
}

async function addStudent() {
    const { id, name, age, course } = await inquirer.prompt([
      {  name: 'id', 
         type: 'input',
         message: chalk.rgb(155,136,0)('Enter Student ID:') 
        },
      { name: 'name', 
        type: 'input', 
        message: chalk.rgb(155,136,0)('Enter Student Name:') 
    },
      { name: 'age', 
        type: 'input', 
        message: chalk.rgb(155,136,0)('Enter Student Age:') 
    },
      { name: 'course', 
        type: 'input', 
        message:  chalk.rgb(155,136,0)('Enter Your Course:') 
    },
    ]);
    
    students.push(new Student(Number(id), name, Number(age),course ));
    console.log(chalk.rgb(155,136,100).underline('\n\tStudent added successfully!'));
}

async function addTeacher() {
    const { id, name, age, department } = await inquirer.prompt([
    { name: 'id', 
        type: 'input', 
        message: chalk.rgb(155,136,0)('Enter Teacher ID:') 
    },
    { name: 'name', 
      type: 'input', 
      message: chalk.rgb(155,136,0)('Enter Teacher Name:') 
    },
    { name: 'age', 
      type: 'input', 
      message: chalk.rgb(155,136,0)('Enter Teacher Age:') 
    },
    { name: 'department',
      type: 'input',
      message:  chalk.rgb(155,136,0)('Enter Your Department:') 
    },
    ]);
   
    teachers.push(new Teacher(Number(id), name, Number(age), department));
    console.log(chalk.rgb(155,136,100).underline('\n\tTeacher added successfully!'));
}

function viewStudents() {
    console.log('\n')
    console.table(students);
  }

function viewTeachers() {
     console.log('\n')
    console.table(teachers);
}

option();