-- select rand();
-- select round(rand() * 10000, 2);
-- Configura um salário aleatório para users
update users set salary = round(rand() * 10000, 2);

select salary from users where
salary BETWEEN 1000 and 1500
order by salary asc;