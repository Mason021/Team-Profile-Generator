const createCards = employeeGroupData => {
 
    const manager = employeeGroupData.manager.map(function(work) {
        let managersHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${work.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${work.id}</p>
            <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
            <p>Office Number: ${work.office}</p>
        </div>
        `
        return managersHtml
    });

    const engineer = employeeGroupData.engineer.map(function(work) {
        let engineersHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${work.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${work.id}</p>
            <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
            <p> Github: <a href="https://github.com/${work.github}" target="_blank">${work.github}</a></p>
        </div>
        `
        return engineersHtml
    })

    const intern = employeeGroupData.intern.map(function(work) {
        let internsHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${work.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${work.id}</p>
            <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
            <p> School: ${work.school}</p>
        </div>
        `
        return internsHtml
    })
    return [manager,engineer,intern]
}

module.exports = layoutData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">My Team</h1>
            </header>
            ${createCards(layoutData)}
        </body>
        </html>    
        `
}