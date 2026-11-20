-- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
select id, first_name, email as uemail
from users
where id between 100 and 150
order by first_name desc
-- limit 5;
-- limit 2 offset 4;
-- limit 2 offset 6;
limit 3,6;