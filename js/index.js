const dbFunctions = require('../db')
const questions = require('./questions')
const inquirer = require('inquirer');
const { employee } = require('./questions');
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
        dbFunctions.viewDepartments().then((departments) => {
            const deptChoices = departments.map((department) => ({
                value: department.id,
                name: department.dept_name
            }))
            inquirer.prompt([
                {
                    type: 'list',
                    choices: deptChoices,
                    message: 'What department is this role for?',
                    name: 'deptId'
                },
                questions.role.title,
                questions.role.salary
            ])
                .then((results) => {
                    dbFunctions.addRole(results)
                    startManagement()
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