/*
-- Delete apaga registros da tabela
DELETE FROM users where id = 115;

-- Aviso: use SELECT para garantir que está
-- apagando os valores corretos
select * from users where id BETWEEN 110 and 115;
*/
const knex = require('../../knex/config/database');
const select = knex('users').select('id', 'first_name');
const deleteSql = knex('users').delete().whereBetween('id', [30, 35]);
// const deleteSql = knex('users').delete().where({ id: 115 });

console.log(select.toString());
console.log(deleteSql.toString());

deleteSql.then((data) => {
  console.log(data);

  select.then((data) => {
    console.log(data);
  }).catch((e) => {
    console.log(e.message);
  });
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});