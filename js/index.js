const dbFunctions = require('../db')
const questions = require('./questions')
const inquirer = require('inquirer');
module.exports = {
    createDepartment() {
        inquirer.prompt(questions.department)
            .then((results) => {
                dbFunctions.viewDepartments()
                    .then((departments) => {
                        const deptArr = []
                        for (let i = 0; i < departments.length; i++) {
                            deptArr.push(departments[i].dept_name)
                        }
                        if (!deptArr.includes(results.deptName)) {
                            dbFunctions.addDepartment(results)
                            startManagement()
                        }
                        else {
                            startManagement()
                        }
                    })
            })
    },
    createRole() {

        inquirer.prompt([
            questions.role.deptId,
            questions.role.title,
            questions.role.salary
        ])
            .then((results) => {
                dbFunctions.addRole(results)
                startManagement()
            })

    },
    createEmployee() {

        inquirer.prompt([
            questions.employee.manager,
            questions.employee.roleId,
            questions.employee.firstName,
            questions.employee.lastName
        ]).then((results) => {
            dbFunctions.addEmployee(results)
            startManagement()
        })

    },
    viewByManager() {
        inquirer.prompt([
            questions.employee.manager,
        ])
            .then((results) => {
                dbFunctions.viewBy(results)
                    .then((results) => {
                        console.table(results)
                        startManagement()
                    })

            })
    },
    viewDepartmentSalary() {
        inquirer.prompt([
            questions.role.deptId
        ])
            .then((results) => {
                dbFunctions.viewSalary(results)
                    .then((results) => {
                        console.table(results)
                        startManagement()
                    })

            })
    },
    updateEmployeeRole() {
        inquirer.prompt([
            questions.employee.employeeId,
            questions.employee.roleId
        ])
            .then((results) => {
                dbFunctions.updateRole(results)
                startManagement()
            })
    },
    updateEmployeeManager() {
        inquirer.prompt([
            questions.employee.employeeId,
            questions.employee.manager
        ])
            .then((results) => {
                dbFunctions.updateManager(results)
                startManagement()
            })
    },
    removeDepartment() {
        inquirer.prompt([
            questions.role.deptId
        ]).then((results) => {
            dbFunctions.deleteDepartment(results)
            startManagement()
        })
    },
    removeRole() {
        inquirer.prompt([
            questions.employee.roleId
        ]).then((results) => {
            dbFunctions.deleteRole(results)
            startManagement()
        })
    },
    printDept() {
        dbFunctions.viewDepartments()
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    printEmployee() {
        dbFunctions.employeeInfo()
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    printRole() {
        dbFunctions.viewRoles()
            .then((results) => {
                console.table(results)
                startManagement()
            })
    }
}