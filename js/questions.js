module.exports = {
    options: {
        type: 'list',
        choices: [
            'Add Department',
            'Add Role',
            'Add Employee',
            'View Department',
            'View Role',
            'View Employee',
            'Update Employee Role',
            'End Program'
        ],
        message: 'What would you like to do?',
        name: 'options'
    },
    department: {
        type: 'input',
        name: 'deptName',
        message: 'What is the new department name?'
    },
    role: {
        salary: {
            type: 'input',
            message: 'What is the salary for this role?',
            name: 'roleSalary'
        },
        title: {
            type: 'input',
            message: 'What is the title of this role?',
            name: 'roleTitle'
        }
    },
    employee: {
        firstName: {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'firstName'
        },
        lastName: {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'lastName'
        }
    }
}
