//packages
const inquirer = require('inquirer');
const fse = require('fs-extra');
const jest = require('jest');
const path = require('path')



//input for job type/info

const workerInfo = () => {
    return inquirer.prompt([
    {
        type: 'list',
        message: 'What is your current position?',
        name: 'position',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'github',
        message: 'If Engineer please enter GitHub username.',
        // when: ({employee}) => {
        //     if (employee === 'Engineer') {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your employees name'
    },
]);

}

workerInfo()