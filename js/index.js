// require files and npm packages
const dbFunctions = require('../db')
const questions = require('./questions')
const inquirer = require('inquirer');

module.exports = {
    // function to create department
    createDepartment() {
        // ask user for department name
        inquirer.prompt(questions.department)
            .then((results) => {
                // view all departments
                dbFunctions.viewDepartments()
                    .then((departments) => {
                        const deptArr = []
                        // loop through departments and push to empty array
                        for (let i = 0; i < departments.length; i++) {
                            deptArr.push(departments[i].dept_name)
                        }
                        // if the department the user input doesn't exist send the results to the add department function and ask next question
                        if (!deptArr.includes(results.deptName)) {
                            dbFunctions.addDepartment(results)
                            console.log('\n Successfully added department! \n')
                            startManagement()
                        }
                        // if it already exist ask next question
                        else {
                            console.log('\n Unsuccessful! Department already exists. \n')
                            startManagement()
                        }
                    })
            })
    },

    // function to create role
    createRole() {
        // collect role data from user
        inquirer.prompt([
            questions.functions.deptId,
            questions.role.title,
            questions.role.salary
        ])
            // send results to add role function
            .then((results) => {
                dbFunctions.addRole(results)
                console.log('\n Successfully added role! \n')
                startManagement()
            })

    },
    // function to create employee
    createEmployee() {
        // collect employee data from user
        inquirer.prompt([
            questions.functions.manager,
            questions.functions.roleId,
            questions.employee.firstName,
            questions.employee.lastName
        ])
            // send results to add employee function
            .then((results) => {
                dbFunctions.addEmployee(results)
                console.log('\n Successfully added employee! \n')
                startManagement()
            })

    },

    // function to view employees by manager
    viewByManager() {
        // collect manager info
        inquirer.prompt([
            questions.functions.manager,
        ])
            // send results to view by function
            .then((results) => {
                dbFunctions.viewBy(results)
                    .then((results) => {
                        console.table(results)
                        startManagement()
                    })

            })
    },

    // function to view total salary by department
    viewDepartmentSalary() {
        // collect department info
        inquirer.prompt([
            questions.functions.deptId
        ])
            // send results to view salary function
            .then((results) => {
                dbFunctions.viewSalary(results)
                    .then((results) => {
                        console.table(results)
                        startManagement()
                    })

            })
    },

    // function to update employee role
    updateEmployeeRole() {
        // collect employee info and role info
        inquirer.prompt([
            questions.functions.employeeId,
            questions.functions.roleId
        ])
            // send results to update role function
            .then((results) => {
                dbFunctions.updateRole(results)
                console.log(`\n Successfully updated employee's role! \n`)
                startManagement()
            })
    },

    // function to update employee manager
    updateEmployeeManager() {
        // collect employee info and manager info
        inquirer.prompt([
            questions.functions.employeeId,
            questions.functions.manager
        ])
            // send results to update manager function
            .then((results) => {
                dbFunctions.updateManager(results)
                console.log(`\n Successfully updated employee's manager! \n`)
                startManagement()
            })
    },

    // function to remove department
    removeDepartment() {
        // collect department info
        inquirer.prompt([
            questions.functions.deptId
        ])
            // send results to delete department function
            .then((results) => {
                dbFunctions.deleteDepartment(results)
                console.log(`\n Successfully deleted department! \n`)
                startManagement()
            })
    },

    // function to remove role
    removeRole() {
        // collect role info
        inquirer.prompt([
            questions.functions.roleId
        ])
            // send results to delete role function
            .then((results) => {
                dbFunctions.deleteRole(results)
                console.log(`\n Successfully deleted role! \n`)
                startManagement()
            })
    },

    // function to remove employee
    removeEmployee() {
        // collect employee info
        inquirer.prompt([
            questions.functions.employeeId
        ])
            // send results to delete employee function
            .then((results) => {
                dbFunctions.deleteEmployee(results)
                console.log(`\n Successfully deleted department! \n`)
                startManagement()
            })
    },

    // function to view departments
    printDept() {
        // get department information
        dbFunctions.viewDepartments()
            // show results in console
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },

    // function to view employee
    printEmployee() {
        // get employee information
        dbFunctions.employeeInfo()
            // show results in console
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },

    // function to view employee
    printRole() {
        // show results in console
        dbFunctions.viewRoles()
            // show results in console
            .then((results) => {
                console.table(results)
                startManagement()
            })
    }
}