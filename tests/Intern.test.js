const Intern = require("../lib/Intern");

test("Set school", () => {
    const testValue = "UND";
    const e = new Intern("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.school).toBe(testValue);
    });

test("getRole()", () => {
    const testValue = "Intern";
    const e = new Intern("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
    });
    
test("getSchool()", () => {
    const testValue = "UND";
    const e = new Intern("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
    });