const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com', 'College');
    expect(intern.name).toBe('Mulder Scully');
    expect(intern.id).toBe('8008');
    expect(intern.email).toBe('theTruthIsOutThere@xFiles.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});