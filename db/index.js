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
    updateManager(results) {
        return connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    manager_id: results.managerId
                },
                {
                    id: results.id
                }
            ]
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
    deleteDepartment(results) {
        return connection.query(`DELETE FROM department WHERE ?`,
            {
                id: results.deptId
            }
        )
    },
    viewBy(results) {
        return connection.query(`SELECT ee.id, ee.first_name, ee.last_name, er.title, ed.dept_name, er.salary, CONCAT(em.first_name,' ',em.last_name) as manager
                                FROM employees_db.employee as ee
                                LEFT JOIN  employees_db.role as er
                                ON ee.role_id = er.id
                                LEFT JOIN employees_db.department as ed
                                ON er.department_id = ed.id
                                LEFT JOIN employees_db.employee as em
                                on ee.manager_id = em.id
                                WHERE em.id = ?`,
            [results.managerId]
        )
    },
    viewSalary(results) {
        return connection.query(`SELECT  ed.dept_name, sum(er.salary)
                                FROM employees_db.employee as ee
                                LEFT JOIN  employees_db.role as er
                                ON ee.role_id = er.id
                                LEFT JOIN employees_db.department as ed
                                ON er.department_id = ed.id
                                LEFT JOIN employees_db.employee as em
                                on ee.manager_id = em.id
                                WHERE ed.id = ?`,
            [results.deptId]
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
    employeeInfo() {
        return connection.query(`SELECT ee.id, ee.first_name, ee.last_name, er.title, ed.dept_name, er.salary, CONCAT(em.first_name,' ',em.last_name) as manager
                                FROM employees_db.employee as ee
                                LEFT JOIN  employees_db.role as er
                                ON ee.role_id = er.id
                                LEFT JOIN employees_db.department as ed
                                ON er.department_id = ed.id
                                LEFT JOIN employees_db.employee as em
                                on ee.manager_id = em.id`)
    },
    endManagement() {
        return connection.end()
    }
}


