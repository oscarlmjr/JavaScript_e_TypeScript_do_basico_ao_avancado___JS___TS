-- SELECT id, first_name FROM users
-- SELECT first_name FROM users
SELECT first_name, COUNT(id) as total FROM users
GROUP BY first_name
-- ORDER BY first_name ASC;
ORDER BY total DESC;

select u.first_name, COUNT(u.id) as total from users u
left join profiles p 
on p.user_id = u.id
WHERE u.id IN (134, 136, 213, 123)
GROUP BY first_name
ORDER BY total DESC
LIMIT 5;
