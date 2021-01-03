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
('Bruce','Wayne',5,null),
('Kal-El','Kent',6,1),
('Donna','Troy',3,null),
('Berry','Allen',4,3),
('John','Stewart',1,null),
('Arthur','Curry',2,5)
;