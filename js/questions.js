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
            'End Program'
        ],
        message: 'What would you like to do?',
        name: 'options'
    },
    department: {
        type: 'input',
        name: 'deptName',
        message: 'What is the new department name?'
    }
}
