const htmlFile = myTeamFile => {
    const managerCard = manager => {
        return `
        <div class="column d-flex flex-column m-2">
            <div class="text-bg-success p-4">
                <h1>${manager.name}</h1>
                <h2>Manager</h2>
                <p>Employee ID: ${manager.id}</p>
                <p>Office Number: ${manager.office}</p>
                <a href="mailto:${manager.email}"><button class="btn btn-light">Email Me</button></a>
            </div>
        </div>`;
    };
    const engineerCard = engineer => {
        return `
        <div class="column d-flex flex-column m-2">
            <div class="text-bg-secondary p-4">
                <h1>${engineer.name}</h1>
                <h2>Engineer</h2>
                <p>Employee ID: ${engineer.id}</p>
                <div>
                    <a href="https://github.com/${engineer.github}" target="_blank"><button class="btn btn-light">Github</button></a>
                    <a href="mailto:${engineer.email}"><button class="btn btn-light">Email Me</button></a>
                </div>
            </div>
        </div>`;
    };
    const  internCard = intern => {
        return `
        <div class="column d-flex flex-column m-2">
            <div class="text-bg-danger p-4">
                <h1>${intern.name}</h1>
                <h2>Intern</h2>
                <p>Employee ID: ${intern.id}</p>
                <p>I'm currently enrolled at: ${intern.school}</p>
                <a href="mailto:${intern.email}"><button class="btn btn-light">Email Me</button></a>
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
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <title>My Team</title>
  </head>
  <body>
    <header class="d-flex p-3 mb-3 bg-primary text-white justify-content-center">
    <h1>The Best Team Out There</h1>
    </header>
    <main>
    <div class="d-flex justify-content-center">
        <div class="d-flex flex-row m-2">
            ${htmlFile(myTeamFile)}
        </div>
    </div>
    </main>
  </body>
</html>
    `
}