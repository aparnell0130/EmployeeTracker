const connection = require('./dbconnection')

module.exports = {
    addDepartment(results) {
        return connection.query(`INSERT INTO department SET ?`,
            {
                dept_name: results.deptName
            }
        )
    },
    addEmployee(results) {
        return connection.query(`INSERT INTO employee SET ?`,
            {

            }
        )
    },
    endManagement() {
        return connection.end()
    }
}


