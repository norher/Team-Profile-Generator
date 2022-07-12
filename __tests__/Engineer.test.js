const Engineer = require('../lib/Engineer');

describe("Engineer test", () => {
    describe('Can Create a new Engineer', () => {
        it("should create new Engineer", () => {
            const engineer = new Engineer();
            expect(typeof(engineer).toBe('object'));
        })
    });
    describe("can use constructor", () => {
        it("should set an email via constructor", () => {
            const email = "normanh.dev@gmail.com";
            const engineer = new Engineer('norms', 1, email)
            expect(engineer.email).toBe(email);
        })
    })
})