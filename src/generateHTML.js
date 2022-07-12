function managerCard(manager) {
    return `
    <div>
        <div>
            <h1>${manager.name}</h1>
            <h2>${manager.role}</h2>
        </div>
        <div>
        <ul>
            <li>ID: ${manager.id}</li>
            <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li>Office Number: ${manager.number}</li>
        </ul>
        </div>
    </div>`;
};
function engineerCard(engineer) {
    return `
    <div>
        <div>
            <h1>${engineer.name}</h1>
            <h2>${engineer.role}</h2>
        </div>
        <div>
        <ul>
            <li>ID: ${engineer.id}</li>
            <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li>GithubProfile: <a href="https://github.com/${engineer.githubProfile} target="_blank">${engineer.githubProfile}</a></li>
        </ul>
        </div>
    </div>`;
};
function internCard(intern) {
    return `
    <div>
        <div>
            <h1>${intern.name}</h1>
            <h2>${intern.role}</h2>
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