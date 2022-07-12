const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe('Can Create a new Manager that includes name, id, email and github', () => {
        it("should create new Manager", () => {
            const manager = new Manager('Norman', 1, 'norman.herrera@ymail.com', '5280');
            expect(manager).toEqual({
                name: 'Norman',
                id: 1,
                email: 'norman.herrera@ymail.com',
                office: '5280'
            });
        });
    });
});