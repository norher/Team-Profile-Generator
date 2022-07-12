const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe('Can create a new Intern that includes name, id, email and school', () => {
        it('should creat a new Intern', () => {
            const intern = new Intern('Norman', 1, 'norman.herrera@ymail.com', 'DU');
            expect(intern).toEqual({
                name: 'Norman',
                id: 1,
                email: 'norman.herrera@ymail.com',
                school: "DU"
            });
        });
    });
});