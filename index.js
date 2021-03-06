// require files and npm packages  
const dbFunctions = require('./db');
const jsFunctions = require('./js');
const logo = require('./assets/logo/logo')
const questions = require('./js/questions')
const inquirer = require('inquirer');

// starting function
startManagement = () => {
    // ask question with options
    inquirer.prompt(questions.options).then((results) => {
        // after user selects option run the corresponding function
        switch (results.options) {
            case 'Add Department':
                jsFunctions.createDepartment()
                return;
            case 'Add Role':
                jsFunctions.createRole()
                return;
            case 'Add Employee':
                jsFunctions.createEmployee()
                return;
            case 'View Department':
                jsFunctions.printDept()
                return;
            case 'View Role':
                jsFunctions.printRole()
                return;
            case 'View Employee':
                jsFunctions.printEmployee()
                return;
            case 'View Employees by Manager':
                jsFunctions.viewByManager()
                return;
            case 'View Salary by Department':
                jsFunctions.viewDepartmentSalary()
                return;
            case 'Update Employee Role':
                jsFunctions.updateEmployeeRole()
                return;
            case 'Update Employee Manager':
                jsFunctions.updateEmployeeManager()
                return;
            case 'Delete Department':
                jsFunctions.removeDepartment()
                return;
            case 'Delete Role':
                jsFunctions.removeRole()
                return;
            case 'Delete Employee':
                jsFunctions.removeEmployee()
                return;
            default:
                dbFunctions.endManagement()
        }
    })

}

startManagement()