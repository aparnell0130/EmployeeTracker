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
('Engineer',85000,3),
('Assistant Manager',95000,3),
('Lead',70000,2)
;

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES
('Bruce','Wayne',5,null),
('Dick','Grayson',7,1),
('Kal-El','Kent',6,2),
('Diana','Troy',3,null),
('Alfred','Pennyworth',8,4),
('Barry','Allen',4,5),
('John','Stewart',1,null),
('Arthur','Curry',2,7)
;