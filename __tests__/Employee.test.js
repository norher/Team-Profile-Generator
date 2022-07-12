const Employee = require('../lib/Employee');

test("Creates new employee", () => {
    const employee = new Employee("Norman Herrera", 1, "normanh.dev@gmail.com");
    expect(employee.name).toBe("Norman Herrera");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
});

test("Checks employee status", () => {
    const employee = new Employee("Norman Herrera", 1, "normanh.dev@gmail.com");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
});