#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

class Student {
    name: string
    constructor(name: string) {
        this.name = name
    }
};

class person {
    student: Student[]= [];
    addStudent(obj: any) {
        this.student.push(obj)
    }
};

const persons = new person()

const programeStart = async(persons: person)=> {
    do {
        console.log(chalk.bold.greenBright("-----------------------------------------------------------"));
        console.log(chalk.bold.bgBlueBright("--------------welcome to sawera OOP project---------------"));
        console.log(chalk.bold.red("--------------------------------------------------------------------"));
  
        const answer = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Who would you like to talk to?",
                choices: ["Self", "Student", "Exit"]
            }
        ]);
        if(answer.opt === "Exit") {
            console.log(chalk.bold.yellow("Exiting...."));

            process.exit()
        }

        if(answer.opt === "Self"){
            console.log(chalk.bold.green("Hi, I'm talking to myself"));
            console.log(chalk.bold.magenta("I am in good health"));

        }
        if(answer.opt ==="Student") {
            const answer2 = await inquirer.prompt([{
                name: "student",
                type: "input",
                message: "Which student do you want to talk to?"
            }]);

            const student = persons.student.find(val=> val.name === answer2.student);
            if(!Student){
                const addStudent = new Student(answer2.student);
                persons.addStudent(addStudent);
                console.log(`Hello I,am ${addStudent.name}`);
                console.log("How are you");
                console.log(persons.student);
                

            }
            if(student){
                console.log(`Hello i am ${student.name}, or me thk hun.......`);
                console.log(chalk.bold.red("---Student Data---"));
                console.log(persons.student);
            }
        }

    }while(true)

};

programeStart(persons)