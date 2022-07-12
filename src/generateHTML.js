const htmlFile = myTeamFile => {
    const managerCard = manager => {
        return `
        <div>
            <div>
                <h1>${manager.name}</h1>
                <h2>Manager</h2>
            </div>
            <div>
            <ul>
                <li>ID: ${manager.id}</li>
                <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li>Office Number: ${manager.office}</li>
            </ul>
            </div>
        </div>`;
    };
    const engineerCard = engineer => {
        return `
        <div>
            <div>
                <h1>${engineer.name}</h1>
                <h2>Engineer</h2>
            </div>
            <div>
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li>Github Profile: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
            </div>
        </div>`;
    };
    const  internCard = intern => {
        return `
        <div>
            <div>
                <h1>${intern.name}</h1>
                <h2>Intern</h2>
            </div>
            <div>
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li>School: ${intern.school}</li>
            </ul>
            </div>
        </div>`;
    };

    const employeeCards = [];

    employeeCards.push(myTeamFile
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerCard(manager))
        );

    employeeCards.push(myTeamFile
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => engineerCard(engineer))
        );

    employeeCards.push(myTeamFile
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => internCard(intern))
        );

        return employeeCards.join('');

};

module.exports = myTeamFile => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <title>Team Members</title>
  </head>
  <body>
    <main>
    ${htmlFile(myTeamFile)}
    </main>
  </body>
</html>
    `
}