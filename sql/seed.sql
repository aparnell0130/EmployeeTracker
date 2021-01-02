USE employees_db;
INSERT INTO department ( dept_name)
VALUES 
('Accounting'),
('Sales'),
('Engineering')
;

INSERT INTO role (title, salary, department_id)
VALUES
('Manager',100000, 1),
('Accountant',70000,1),
('Manager',90000,2),
('Sales_Rep',55000,2),
('Manager',110000,3),
('Engineer',85000,3)
;

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES
('Aaron','Parnell',5,null),
('Alijah','Parnell',6,1),
('Yuliana','Parnell',3,null),
('Jason','Mamoa',4,3),
('Daniel','Murr',1,null),
('Roxie','Murr',2,5)
;