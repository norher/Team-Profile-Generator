const Employee = require('../lib/Employee');

test("Creates new employee", () => {
    const employee = new Employee("Norman Herrera", 1, "normanh.dev@gmail.com");
    expect(employee.name).toBe("Norman Herrera");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
});