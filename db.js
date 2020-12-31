const cTable = require('console.table');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'User1234',
    database: 'sakila'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    startQuery()
});

startQuery = () => {
    connection.query(`select * from actor`, function (error, results, fields) {
        if (error) throw error;
        console.table(results);
    });
    connection.end();
}

