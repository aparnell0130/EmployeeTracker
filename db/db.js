const cTable = require('console.table');
const util = require('util')
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'User1234',
    database: 'sakila'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log(`\n connected as user ${connection.config.user} \n`);
});

connection.query = util.promisify(connection.query)

module.exports = connection