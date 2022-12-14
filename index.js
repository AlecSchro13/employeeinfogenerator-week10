//packages
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs/promises');
const jest = require('jest');
const path = require('path');
const render = require('./src/page.template.js');

const teamMembers = [];
const idArray = [];

//input for job type/info
function appMenu() {
  function createTeam() {
    console.log("Hello team member, please select a position and go from there! (:");
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'teamChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Manager',
            'Engineer',
            'Intern',
            "I don't want to add anyone else.",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.teamChoice) {
          case 'Manager':
            addManager();
            break;
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addManager() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is your team leaders name?',
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter a valid name';
        },
      },

      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team lead's email?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return 'Please enter a valid email';
        },
      },

      {
        type: 'input',
        name: 'managerId',
        message: "What is the team lead's id?",
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
        name: 'managerOffice',
        message: "What is the team lead's office number?",
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
          answers.managerOffice
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is your engineer's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please enter a different number.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's email?",
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
          name: 'engineerGithub',
          message: "What is your engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is your intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please enter a different number.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's email?",
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
          name: 'internSchool',
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }
  createTeam();
}

function buildTeam() {
  const htmlTemplate = render(teamMembers)
  fs.writeFile("./dist/index.html", htmlTemplate, (err) => {
    if (err) throw new Error("Error creating your page, try again later.", err)
  })
}

appMenu();
