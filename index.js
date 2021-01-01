const dbFunctions = require('./db');
const jsFunctions = require('./js');
const logo = require('asciiart-logo');
const config = require('./package.json');
const inquirer = require('inquirer');
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
    inquirer.prompt([
        {
            type: 'list',
            choices: [
                'Add Employee',
                'Add Department',
                'End Program'
            ],
            message: 'What would you like to do?',
            name: 'options'
        }
    ]).then((results) => {
        switch (results.options) {
            case 'Add Department':
                jsFunctions.addDept()
                return;
            default:
                dbFunctions.endManagement()
        }
    })

}


startManagement()