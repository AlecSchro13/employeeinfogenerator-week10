const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitUsername) {
        super(name, id, email);
        this.gitUsername = gitUsername;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.gitUsername;
    }

}

module.exports = Engineer;