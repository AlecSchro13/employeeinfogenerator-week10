//packages
const inquirer = require('inquirer');
const fse = require('fs-extra');
const jest = require('jest');

//input for job type/info

const workerInfo = [
    {
        type: 'checkbox',
        message: 'What is your current position?',
        name: 'position',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'What is your Github'
    }
]