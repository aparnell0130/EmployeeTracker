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
                const chooseManager = ['none']
                for (let i = 0; i < managers.length; i++) {
                    chooseManager.push(`${managers[i].id} ${managers[i].first_name} ${managers[i].last_name} `);

                }
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
                                message: `Who will be this employee's manager?`,
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
    viewByManager() {
        dbFunctions.viewManagers().then((managers) => {
            const managerChoices = managers.map((manager) => ({
                value: manager.id,
                name: `${manager.first_name} ${manager.last_name}`
            }))
            inquirer.prompt([
                {
                    type: 'list',
                    choices: managerChoices,
                    message: 'What department is this role for?',
                    name: 'manager'
                }
            ])
                .then((results) => {
                    dbFunctions.viewBy(results)
                        .then((results) => {
                            console.table(results)
                            startManagement()
                        })

                })
        })
    },
    updateEmployeeRole() {
        dbFunctions.viewEmployees().then((employees) => {
            const employeeChoices = employees.map((employee) => ({
                value: employee.id,
                name: `${employee.first_name} ${employee.last_name}`
            }))
            dbFunctions.viewRoles()
                .then((roles) => {
                    const roleChoices = roles.map((role) => ({
                        value: role.id,
                        name: role.title
                    }))
                    inquirer.prompt([
                        {
                            type: 'list',
                            choices: employeeChoices,
                            message: `Which employee's role would you like to update?`,
                            name: 'id'
                        },
                        {
                            type: 'list',
                            choices: roleChoices,
                            message: `What would you like their new role to be?`,
                            name: 'roleId'
                        }
                    ])
                        .then((results) => {
                            dbFunctions.updateRole(results)
                            startManagement()
                        })
                })
        })
    },
    updateEmployeeManager() {
        dbFunctions.viewEmployees().then((employees) => {
            const employeeChoices = employees.map((employee) => ({
                value: employee.id,
                name: `${employee.first_name} ${employee.last_name}`
            }))
            dbFunctions.viewManagers()
                .then((managers) => {
                    const managerChoices = managers.map((manager) => ({
                        value: manager.id,
                        name: `${manager.first_name} ${manager.last_name}`
                    }))
                    inquirer.prompt([
                        {
                            type: 'list',
                            choices: employeeChoices,
                            message: `Which employee's role would you like to update?`,
                            name: 'id'
                        },
                        {
                            type: 'list',
                            choices: managerChoices,
                            message: `What would you like their new role to be?`,
                            name: 'managerId'
                        }
                    ])
                        .then((results) => {
                            dbFunctions.updateManager(results)
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