-- Selecion colunas
-- select * from users;
-- select * from users u;
-- select email from users u;
-- select email, id from users u;
-- select
-- email as e, id as i, first_name as fn
-- from users as u;
select
-- email e, id i, first_name "eu posso colocar isso"
-- u.email e, u.id i, u.first_name
u.email uemail, u.id uid, u.first_name ufirst_name
from users as u;