const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Robin Williams', '9876', 'RwIsMissed@goodMorningVietnam.com', 'RobinWilliamsGitPage')
    
    expect(engineer.name).toBe('Robin Williams');
    expect(engineer.id).toBe('9876');
    expect(engineer.email).toBe('RwIsMissed@goodMorningVietnam.com');
    expect(engineer.github).toBe('RobinWilliamsGitPage');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Robin Williams', '9876', 'RwIsMissed@goodMorningVietnam.com', 'RobinWilliamsGitPage')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('RobinWilliamsGitPage'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Robin Williams', '9876', 'RwIsMissed@goodMorningVietnam.com', 'RobinWilliamsGitPage')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});