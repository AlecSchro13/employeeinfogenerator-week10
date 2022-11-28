const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

const buildTeam = (team) => {
  const cards = []

  console.log(team);
  const buildManager = (manager) => {
    return `
      <div class = "card">
      <div class = "card-header">
        <h1 class = "card-title">Name: ${manager.getName()}</h1>
        <h3 class = "card-title">Position: ${manager.getRole()}</h3>
      </div>
      <div class = "card-body">
      <p>ID: ${manager.getId()}</p>
      <p>Office Number: ${manager.getOfficeNumber()}</p>
      <p>Email: ${manager.getEmail()}</p>
      </div>
      </div>
    `
  }

  const buildEngineer = (engineer) => {
    return `
      <div class = "card">
      <div class = "card-header">
        <h1 class = "card-title">Name: ${engineer.getName()}</h1>
        <h3 class = "card-title">Position: ${engineer.getRole()}</h3>
      </div>
      <div class = "card-body">
      <p>ID: ${engineer.getId()}</p>
      <p>Github Username: ${engineer.getGithub()}</p>
      <p>Email: ${engineer.getEmail()}</p>
      </div>
      </div>
    `
  }

  const buildIntern = (intern) => {
    return `
      <div class = "card">
      <div class = "card-header">
        <h1 class = "card-title">Name: ${intern.getName()}</h1>
        <h3 class = "card-title">Position: ${intern.getRole()}</h3>
      </div>
      <div class = "card-body">
      <p>ID: ${intern.getId()}</p>
      <p>School Attended: ${intern.getSchool()}</p>
      <p>Email: ${intern.getEmail()}</p>
      </div>
      </div>
    `
  }

  cards.push(team.filter((employee, i) => employee.getRole() === "Manager").map((manager) => buildManager(manager)));
  cards.push(team.filter((employee, i) => employee.getRole() === "Engineer").map((engineer) => buildEngineer(engineer)));
  cards.push(team.filter((employee, i) => employee.getRole() === "Intern").map((intern) => buildIntern(intern)));

  return cards.join("");
 
}


//overall layout
module.exports = teamMembers => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    
    
    <body>

    <div class = "container">
    <header><h1 class = "text-center header"> My Team </h1></header>
      <div class="row">
       ${buildTeam(teamMembers)}
      </div>
      </div>
    </body>
    </html>

`
}


