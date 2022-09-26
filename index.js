//packages
const inquirer = require('inquirer');
const fse = require('fs-extra');
const jest = require('jest');
const path = require('path');
const buildteam = require('./src/page.template');



//input for job type/info

const workerInfo = () => {
    return inquirer.prompt([
    {
        type: 'choice',
        message: 'Would you like to add one of the following?',
        name: 'position',
        choices: ['Engineer', 'Intern', 'done adding new employees']
    },
    {
        type: 'input',
        name: 'github',
        message: 'If Engineer please enter GitHub username.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your employees name'
    },
]);

}

workerInfo()