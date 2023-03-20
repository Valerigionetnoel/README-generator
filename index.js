// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input

const questions = [
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please give us a description of your project.',
            name: 'projectDescription'
        },
        {
            type: 'input',
            message: ''
        }
    ])
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app
init();
