-- Delete apaga registros da tabela
-- DELETE FROM users WHERE id = 114;
-- DELETE FROM users WHERE id = 112;
DELETE FROM users where id BETWEEN 110 and 115;

-- Aviso: use SELECT para garantir que está
-- apagando os valores corretos
select * from users where id BETWEEN 110 and 115;
-- select * from users WHERE id = 112;