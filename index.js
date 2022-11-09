//packages
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fse = require('fs-extra');
const jest = require('jest');
const path = require('path');
const render = require('./src/page.template.js');

const teamMembers = [];
const idArray = [];

//input for job type/info
function appMenu() {
    function createManager() {
        console.log('Please choose your manager and then select your team members.');
        inquirer.prompt([
            {
            type: 'input',
            message: 'What is your team Manager/s name?',
            name: 'managerName',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            },
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return 'Please enter a positive number greater than zero.';
            },
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            },
          },
          {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return 'Please enter a positive number greater than zero.';
            },
          },
        ])
        .then((answers) => {
          const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
          );
          teamMembers.push(manager);
          idArray.push(answers.managerId);
          createTeam();
        });
    }

}

appMenu()