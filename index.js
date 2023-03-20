// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

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
            message: 'Installation instruction',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How do you use it?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who is contributing to this project?',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'How do you test this?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'githubUserName'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What license do you use?',
            choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'EPL-1.0', 'MPL-2.0'],
            name: 'license'
        },
    ]).then((response) => {
        const readmeString = `
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)
# ${response.title}

## Description

${response.projectDescription}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Question](#question)
- [Test](#test)

## Installation

${response.installation}

## Usage

${response.usage}

## Credits

We have ${response.contribute} working on this project
        
## License

[${response.license}](https://opensource.org/licenses/${response.license})

## Question

My github username is [${response.githubUserName}](https://www.github.com/${response.githubUserName}) and you can contact me by email at [${response.email}](${response.email})
     
## Tests

${response.test}
    `;
        fs.writeFile('README.md', readmeString, (err) => {
            if (err) throw err;
            console.log('README created!')
        })
    })
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    // fs.writeFile('README.MD', readmeString, (err) => {
    //     if (err) throw err;
    //     console.log('README created!')
    // })
}
// TODO: Create a function to initialize app

function init() {
//     questions
//     writeToFile ('README.MD', readmeString)
}

// Function call to initialize app
init();
