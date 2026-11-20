SELECT 
u.id as uid, u.first_name, p.bio, r.name as role_name
FROM users as u
LEFT JOIN profiles p ON u.id = p.user_id
INNER JOIN users_roles as ur ON u.id = ur.user_id
INNER JOIN roles as r ON ur.role_id = r.id
WHERE u.id = 121
ORDER BY uid ASC
LIMIT 1,1;