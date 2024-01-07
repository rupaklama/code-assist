-- database: mysql

-- Get all users from the users table
SELECT *
FROM users;

-- Get all users from the users table with the name "John"
SELECT *
FROM users
WHERE name = "John";

-- get all the tables in the database
SHOW TABLES;


-- get all the users from the users table ordered by the salary
SELECT *
FROM users
ORDER BY salary;

-- get all the users from the users table ordered by the salary in descending order
SELECT *
FROM users
ORDER BY salary DESC;

-- get all the users from the users table and join them with the addresses table
select *
from users join addresses on users.id = addresses.user_id;

-- get all the users from the users table that have a name end with the litter "n";
SELECT *
FROM users
WHERE name LIKE "%n";



