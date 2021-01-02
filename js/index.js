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
    createEmployee() {
        dbFunctions.viewManagers()
            .then((managers) => {
                console.log(managers.length)
                const chooseManager = ['none']
                for (let i = 0; i < managers.length; i++) {
                    chooseManager.push(`${managers[i].id} ${managers[i].first_name} ${managers[i].last_name} `);

                }
                console.log(chooseManager)
                dbFunctions.viewRoles()
                    .then((roles) => {
                        const roleChoices = roles.map((role) => ({
                            value: role.id,
                            name: role.title
                        }))

                        inquirer.prompt([
                            {
                                type: 'list',
                                choices: chooseManager,
                                message: 'What department will this employee work in?',
                                name: 'managerId'
                            },
                            {
                                type: 'list',
                                choices: roleChoices,
                                message: 'What role will this employee have?',
                                name: 'roleId'
                            },
                            questions.employee.firstName,
                            questions.employee.lastName
                        ]).then((results) => {
                            dbFunctions.addEmployee(results)
                            startManagement()
                        })
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