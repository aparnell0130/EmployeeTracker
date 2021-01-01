const connection = require('./dbconnection')

module.exports = {
    addDepartment(results) {
        return connection.query(`INSERT INTO department SET ?`,
            {
                dept_name: results.deptName
            }
        )
    },
    addRole(results) {
        return connection.query(`INSERT INTO role SET ?`,
            {
                title: results.roleTitle,
                salary: results.roleSalary,
                department_id: results.deptId
            }
        )
    },
    addEmployee(results) {
        return connection.query(`INSERT INTO employee SET ?`,
            {
                first_name: results.firstName,
                last_name: results.lastName,
                role_id: results.roleId,
                manager_id: results.managerId
            }
        )
    },
    viewDepartments() {
        return connection.query(`SELECT * from department`)
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    viewRoles() {
        return connection.query(`SELECT * from role`)
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    viewEmployees() {
        return connection.query(`SELECT * from employee`)
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    endManagement() {
        return connection.end()
    }
}


