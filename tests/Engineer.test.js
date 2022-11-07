const Engineer = require("../lib/Engineer");

test("Set up Github", () => {
    const testValue = "GitHub User";
    const e = new Engineer("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.github).toBe(testValue);
    });

test("Set up Github", () => {
    const testValue = "Engineer";
    const e = new Engineer("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
    });
    
test("Set up Github", () => {
    const testValue = "GitHub User";
    const e = new Engineer("Leonardo", 1, "leoninja4@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
    });

