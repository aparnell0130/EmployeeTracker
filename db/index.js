const connection = require('./db')
const logo = require('asciiart-logo');
const config = require('../package.json');
console.log(logo(config).render());
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