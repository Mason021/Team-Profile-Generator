  
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com');

    expect(employee.name).toBe('Mulder Scully');
    expect(employee.id).toBe('8008');
    expect(employee.email).toBe('theTruthIsOutThere@xFiles.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Mulder Scully'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com');

    expect(employee.getId()).toEqual(expect.stringContaining('8008'));
});

test("gets employee's email", () => {
    const employee = new Employee('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('theTruthIsOutThere@xFiles.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});