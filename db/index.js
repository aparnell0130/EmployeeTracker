// require connection
const connection = require('./dbconnection')

module.exports = {
    // function to add department, first you receive the results from the user choices then run query with the results
    addDepartment(results) {
        return connection.query(`INSERT INTO department SET ?`,
            {
                dept_name: results.deptName
            }
        )
    },
    // function to add role, first you receive the results from the user choices then run query with the results
    addRole(results) {
        return connection.query(`INSERT INTO role SET ?`,
            {
                title: results.roleTitle,
                salary: results.roleSalary,
                department_id: results.deptId
            }
        )
    },
    // function to add employee, first you receive the results from the user choices then run query with the results
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
    // function to update employee manager, first you receive the results from the user choices then run query with the results
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
    // function to update employee role, first you receive the results from the user choices then run query with the results
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
    // function to delete department, first you receive the results from the user choices then run query with the results
    deleteDepartment(results) {
        return connection.query(`DELETE FROM department WHERE ?`,
            {
                id: results.deptId
            }
        )
    },
    // function to delete role, first you receive the results from the user choices then run query with the results
    deleteRole(results) {
        return connection.query(`DELETE FROM role WHERE ?`,
            {
                id: results.roleId
            }
        )
    },
    // function to delete employee, first you receive the results from the user choices then run query with the results
    deleteEmployee(results) {
        return connection.query(`DELETE FROM employee WHERE ?`,
            {
                id: results.id
            }
        )
    },
    // function to view employees by manager, first you receive the results from the user choices then run query with the results
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
    // function to view total salary by department, first you receive the results from the user choices then run query with the results
    viewSalary(results) {
        return connection.query(`SELECT  ed.dept_name, sum(er.salary) as total_salary
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
    // function to view everything from department
    viewDepartments() {
        return connection.query(`SELECT * from department`)
    },
    // function to view everything from role
    viewRoles() {
        return connection.query(`SELECT er.id, er.title,er.department_id, ed.dept_name
                                from role er 
                                inner join department ed 
                                on er.department_id = ed.id`)
    },
    // function to view everything from employee
    viewEmployees() {
        return connection.query(`SELECT * from employee`)
    },
    // function to view managers
    viewManagers() {
        return connection.query(`SELECT em.id, em.first_name, em.last_name, em.role_id, er.title
                                from employee em 
                                inner join role er
                                on em.role_id = er.id 
                                where (er.title like '%Manager'
                                or er.title like '%Lead')`)
    },
    // function to view employee information
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
    // function to end the program
    endManagement() {
        return connection.end()
    }
}