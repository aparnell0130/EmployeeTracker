const dbFunctions = require('../db')

const departmentId = () => {
    return dbFunctions.viewDepartments()
        .then((departments) => {
            const deptChoices = departments.map((department) => ({
                value: department.id,
                name: department.dept_name
            }))
            return deptChoices
        })
}
const managerId = () => {
    return dbFunctions.viewManagers()
        .then((managers) => {
            const managerChoices = managers.map((manager) => ({
                value: manager.id,
                name: `${manager.first_name} ${manager.last_name}`
            }))
            managerChoices.unshift({
                value: null,
                name: "No Manager"
            })
            return managerChoices
        })
}
const roleId = () => {
    return dbFunctions.viewRoles()
        .then((roles) => {
            const deptChoices = roles.map((role) => ({
                value: role.id,
                name: role.title
            }))
            return deptChoices
        })
}

const employeeId = () => {
    return dbFunctions.viewEmployees().then((employees) => {
        const employeeChoices = employees.map((employee) => ({
            value: employee.id,
            name: `${employee.first_name} ${employee.last_name}`
        }))
        return employeeChoices
    })
}

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
        deptId: {
            type: 'list',
            choices: () => departmentId(),
            message: 'What department is this role for?',
            name: 'deptId'

        },
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
        manager: {
            type: 'list',
            choices: () => managerId(),
            message: `Who will be this employee's manager?`,
            name: 'managerId'
        },
        roleId: {
            type: 'list',
            choices: () => roleId(),
            message: 'What role will this employee have?',
            name: 'roleId'
        },
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
        employeeId: {
            type: 'list',
            choices: () => employeeId(),
            message: `Which employee's role would you like to update?`,
            name: 'id'
        }
    }
}
