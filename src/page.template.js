const Manager = require("../lib/Manager")

const buildTeam = (team) => {
  const cards = []
  console.log(team)
  console.log(team)
  
  //create functionality that will handle card html creation per employee
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      console.log(team)
      var managerCard = `<h1>${team[i].Manager.name}</h1>`
      cards.push(managerCard)      
    }
   
  }

  //loops through team array and if object in array is a manager, engineer, or intern
    //if manager create manage card, if engineer, create eng card, if intern create int card
cardPage(cards) 
}


//overall layout
const cardPage = function(teamMembers) {
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
    <header><h1 class="header"> My Team </h1></header>
    
    <body>
      <div class="row">
       ${teamMembers}
       
       <h3>${Manager.name}</h3>
      </div>
    </body>
    </html>

`
}


module.exports = buildTeam;