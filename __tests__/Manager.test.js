const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Jimmy John', '1234', 'JimmyJohnsIsFreakyFast@freakyfast.com', 'L33T');
    
    expect(manager.name).toBe('Jimmy John');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('JimmyJohnsIsFreakyFast@freakyfast.com');
    expect(manager.office).toBe('L33T');
});

test("gets employee's role", () => {
    const manager = new Manager('Mulder Scully', '8008', 'theTruthIsOutThere@xFiles.com', 'L33T');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});