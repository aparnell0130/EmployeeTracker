// require node packages
const cTable = require('console.table');
const util = require('util')
const mysql = require('mysql');

// create connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'User1234',
    database: 'employees_db'
});

// connect to mysql
connection.connect();

// promisify connection query for .then chains
connection.query = util.promisify(connection.query)

// export mysql connection
module.exports = connection