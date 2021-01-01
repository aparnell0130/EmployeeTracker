const connection = require('./db')

module.exports = {
    endManagement() {
        return connection.end()
    }
}


