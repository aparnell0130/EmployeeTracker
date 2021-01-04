const dbFunctions = require('../db')
module.exports = {
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
    roleId() {
        return dbFunctions.viewRoles()
            .then((roles) => {
                const deptChoices = roles.map((role) => ({
                    value: role.id,
                    name: role.title
                }))
                return deptChoices
            })
    },

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