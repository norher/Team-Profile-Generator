const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');


let myTeam = [];

const validation = async (input) => {
    if (input === '') {
        return 'this field is required';
    }
    return true;
};

function init() {
    getManager();
}

const getManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Please the name of the manager",
            validate: validation,
        },
        {
            type: "input",
            name: "managerId",
            message: "Please the ID number of the manager",
            validate: validation,
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please the email of the manager",
            validate: validation,
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Please the office number of the manager",
            validate: validation,
        },
    ])
    .then(data => {
        console.log(data);
        const manager = new Manager(
            data.managerName,
            data.managerID,
            data.managerEmail,
            data.managerOffice);
            console.log('manager');
            myTeam.push(manager);
            addTeamMember();
    });
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Who would you like to add next?",
            choices: ["Engineer", "Intern", "None"],
        },
    ])
    .then((data) => {
        if (data.employeeType === "Engineer") {
            getEngineer();
        } else if (data.employeeType === "Intern") {
            getIntern();
        } else {
            generateHTML();
        }
    });
}

function getEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the name of the Engineer?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the id of the Engineer?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the email of the Engineer?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the github username of the Engineer?",
            validate: validation,
        },
    ])
    .then((data) => {
        const engineer = new Engineer(
            data.engineerName,
            data.engineerId,
            data.engineerEmail,
            data.engineerGithub,
        );
        console.log(engineer);
        myTeam.push(engineer);
        addTeamMember();
    });
}
function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the name of the intern?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the id of the intern?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the email of the intern?",
            validate: validation,
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the school of the intern?",
            validate: validation,
        },
    ])
    .then((data) => {
        const intern = new Intern(
            data.internName,
            data.internId,
            data.internEmail,
            data.internGithub,
        );
        console.log(intern);
        myTeam.push(intern);
        addTeamMember();
    });
}

init();