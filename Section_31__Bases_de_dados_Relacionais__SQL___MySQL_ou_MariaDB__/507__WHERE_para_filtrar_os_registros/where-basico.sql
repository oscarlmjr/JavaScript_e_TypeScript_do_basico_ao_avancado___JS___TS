-- where filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
select * from users
-- where id<>110;
where created_at < '2026-11-18 20:30:56'
-- and first_name = 'Luis';
or first_name = 'Luiz';