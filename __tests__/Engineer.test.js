const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe('Can Create a new Engineer that includes name, id, email and github', () => {
        it("should create new Engineer", () => {
            const engineer = new Engineer('Norman', 1, 'norman.herrera@ymail.com', 'norher');
            expect(engineer).toEqual({
                name: 'Norman',
                id: 1,
                email: 'norman.herrera@ymail.com',
                github: 'norher'
            });
        });
    });
});