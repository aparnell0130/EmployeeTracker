const dbFunctions = require('../db')
const questions = require('./questions')
const inquirer = require('inquirer');
const db = require('../db');
module.exports = {
    addDept() {
        inquirer.prompt(questions.department).then((results) => {
            dbFunctions.addDepartment(results)
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