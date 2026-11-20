INSERT INTO users_roles (user_id, role_id)
-- INSERT INTO users_roles (user_id)
VALUES 
(121, 4);
-- (121);

SELECT user_id, role_id from users_roles WHERE
user_id = 121 and role_id = 4;

-- select id from users;
select id, 
(select id from roles order by rand() limit 1) as qualquer
from users;
-- select 1;

insert into users_roles (user_id, role_id)
select id, 
(select id from roles order by rand() limit 1) as qualquer
from users;