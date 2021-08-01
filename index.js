const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};


function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"Please enter employee position",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "Employee Name"
        },
        {
            type:'text',
            name: 'id',
            message: "Employee ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "Employee email?"
        }])
        //manager branch
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"Manager's office number"
                    },
                    {
                        type:'confirm',
                        name:'alternateEntry',
                        message: "add another employee?",
                        default: false
                    }])
                    .then(({office, alternateEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        //check on employeeArr
                        // console.log(employeeArr)
                        if (alternateEntry) {
                            return Prompt();
                        }
                    })
                    //engineer branch
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "Engineer's Github username"
                    },
                    {
                        type:'confirm',
                        name:'alternateEntry',
                        message: "Add another employee?",
                        default: false
                    }])
                    .then(({github, alternateEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                    // console.log(employeeArr)
                        if (alternateEntry) {
                            return Prompt();
                        }
                    })
                    //intern branch
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "School attended by the intern"
                    },
                    {
                        type:'confirm',
                        name:'alternateEntry',
                        message: "Add another employee?",
                        default: false
                    }])
                    .then(({school, alternateEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (alternateEntry) {
                            return Prompt();
                        }
                    })
            }
        })
};
