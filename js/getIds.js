// require database functions
const dbFunctions = require('../db')

module.exports = {
    // function to get the department name and ID, then use ID for value
    departmentId() {
        return dbFunctions.viewDepartments()
            .then((departments) => {
                const deptChoices = departments.map((department) => ({
                    value: department.id,
                    name: department.dept_name
                }))
                return deptChoices
            })
    },
    // function to get the manager name and ID, then use ID for value
    managerId() {
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
    },
    // function to get the role name and ID, then use ID for value
    roleId() {
        return dbFunctions.viewRoles()
            .then((roles) => {
                const deptChoices = roles.map((role) => ({
                    value: role.id,
                    name: `${role.dept_name} ${role.title}`
                }))
                return deptChoices
            })
    },
    // function to get the employee name and ID, then use ID for value
    employeeId() {
        return dbFunctions.viewEmployees().then((employees) => {
            const employeeChoices = employees.map((employee) => ({
                value: employee.id,
                name: `${employee.first_name} ${employee.last_name}`
            }))
            return employeeChoices
        })
    }
}