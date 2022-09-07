const Employee = require('../lib/Employee');

test ('Create Employee Object', () =>{
    const employee = new Employee('Name', 1, 'fakeaccount@gmail.com', 'Role');
    expect(typeof(employee)).toBe('object');
});

test ('Create employees name', () => {
    const employee = new Employee('Name', 1, 'fakeaccount@gmail.com', 'Role');
    expect(employee.name).toEqual(expect.any(String));
});

test ('Create employees ID', () => {
    const employee = new Employee('Name', 1, 'fakeaccount@gmail.com', 'Role');
    expect(employee.id).toEqual(expect.any(Number));
});

test ('Create employees name', () => {
    const employee = new Employee('Name', 1, 'fakeaccount@gmail.com', 'Role');
    expect(employee.email).toEqual(expect.any(String));
});