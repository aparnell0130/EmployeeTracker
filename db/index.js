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
        const manId = results.managerId.split('')[0]
        let manager
        if (results.managerId !== 'none') {
            manager = manId
        }
        else {
            manager = null
        }
        return connection.query(`INSERT INTO employee SET ?`,
            {
                first_name: results.firstName,
                last_name: results.lastName,
                role_id: results.roleId,
                manager_id: manager
            }
        )
    },
    updateRole(results) {
        return connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    role_id: results.roleId
                },
                {
                    id: results.id
                }
            ]
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
    viewManagers() {
        return connection.query(`SELECT * from employee em where em.manager_id is null`)
    },
    endManagement() {
        return connection.end()
    }
}


