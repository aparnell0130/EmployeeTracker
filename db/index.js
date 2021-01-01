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
    },
    viewRoles() {
        return connection.query(`SELECT * from role`)
    },
    viewEmployees() {
        return connection.query(`SELECT * from employee`)
    },
    endManagement() {
        return connection.end()
    }
}


