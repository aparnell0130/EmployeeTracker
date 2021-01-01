const dbFunctions = require('./db');
const jsFunctions = require('./js');
const logo = require('./assets/logo/logo')
const questions = require('./js/questions')
const inquirer = require('inquirer');
startManagement = () => {
    inquirer.prompt(questions.options).then((results) => {
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
            default:
                dbFunctions.endManagement()
        }
    })

}


startManagement()