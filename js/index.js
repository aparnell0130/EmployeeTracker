const dbFunctions = require('../db')
const questions = require('./questions')
const inquirer = require('inquirer');
const db = require('../db');
module.exports = {
    addDept() {
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
    printDept() {
        dbFunctions.viewDepartments()
            .then((results) => {
                console.table(results)
                startManagement()
            })
    },
    printEmployee() {
        dbFunctions.viewEmployees()
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