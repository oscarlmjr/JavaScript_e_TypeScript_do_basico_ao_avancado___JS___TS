SELECT 
max(salary) as max_salary,
min(salary) as min_salary,
avg(salary) as avg_salay,
sum(salary) as sum_salary,
count(salary) as count_salary
FROM users
where first_name = 'Carly';

select u.first_name,
max(u.salary) as max_salary,
min(u.salary) as min_salary,
avg(u.salary) as avg_salay,
sum(u.salary) as sum_salary,
count(u.id) as total
from users u 
left join profiles p 
on p.user_id = u.id
GROUP BY u.first_name
ORDER BY total DESC;