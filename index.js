const dbFunctions = require('./db');
const jsFunctions = require('./js');
const logo = require('asciiart-logo');
const config = require('./package.json');
const questions = require('./js/questions')
const inquirer = require('inquirer');
const db = require('./db');
console.log(
    logo({
        name: 'Employee Management System',
        font: 'ANSI Shadow',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'magenta',
        logoColor: 'bold-cyan',
        textColor: 'yellow',
    })
        .emptyLine()
        .right('version 1.0')
        .emptyLine()
        .center('A simple way to manage your employees!')
        .render()
);
startManagement = () => {
    inquirer.prompt(questions.options).then((results) => {
        switch (results.options) {
            case 'Add Department':
                jsFunctions.addDept()
                return;
            case 'Add Role':
                jsFunctions.addRole()
                return;
            case 'Add Employee':
                jsFunctions.addEmp()
                return;
            case 'View Department':
                dbFunctions.viewDepartments()
                return;
            case 'View Role':
                dbFunctions.viewRoles()
                return;
            case 'View Employee':
                dbFunctions.viewEmployees()
                return;
            default:
                dbFunctions.endManagement()
        }
    })

}


startManagement()