const getIdFunctions = require('./getIds')
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
            'View Employees by Manager',
            'View Salary by Department',
            'Update Employee Role',
            'Update Employee Manager',
            'Delete Department',
            'Delete Role',
            'Delete Employee',
            'End Program'
        ],
        message: 'What would you like to do?',
        name: 'options'
    },
    functions: {
        deptId: {
            type: 'list',
            choices: () => getIdFunctions.departmentId(),
            message: 'Select a department:',
            name: 'deptId'
        },
        manager: {
            type: 'list',
            choices: () => getIdFunctions.managerId(),
            message: `Select a manager:`,
            name: 'managerId'
        },
        roleId: {
            type: 'list',
            choices: () => getIdFunctions.roleId(),
            message: 'Select a role:',
            name: 'roleId'
        },
        employeeId: {
            type: 'list',
            choices: () => getIdFunctions.employeeId(),
            message: `Select an employee:`,
            name: 'id'
        }
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
        },
    }
}
