const connection = require('./db')
const logo = require('asciiart-logo');
const config = require('../package.json');
console.log(
    logo({
        name: 'Employee Management System',
        font: 'ANSI Shadow',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'magenta',
        logoColor: 'bold-cyan',
        textColor: 'yellow',
    })
        .emptyLine()
        .right('version 1.0')
        .emptyLine()
        .center('A simple way to manage your employees!')
        .render()
);
startQuery = () => {
    connection.query(`select * from actor`)
        .then((results) => {

            console.table(results);
        })
        .catch((err) => {
            if (err) throw err
        })
    connection.end();
}
connection.end();

// startQuery()