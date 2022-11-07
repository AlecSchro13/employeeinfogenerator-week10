const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number", () => {
    const testValue = "25";
    const e = new Manager("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.github).toBe(testValue);
    });

test("getRole() to grab manager role", () => {
    const testValue = "Manager";
    const e = new Manager("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
    });
    
test("grab office number with getOffice()", () => {
    const testValue = "25";
    const e = new Manager("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getOffice()).toBe(testValue);
    });