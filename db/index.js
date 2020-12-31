const connection = require('./db')
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
startQuery()