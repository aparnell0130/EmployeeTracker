const dbFunctions = require('../db')
const inquirer = require('inquirer');
module.exports = {
    addDept() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'deptName',
                message: 'What is the new department name?'
            }
        ]).then((results) => {
            dbFunctions.addDepartment(results)
            startManagement()
        })

    }
}