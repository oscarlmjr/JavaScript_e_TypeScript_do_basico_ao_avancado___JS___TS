// const data = new Date('2019-04-20 20:20:59');
// const data = new Date('2019-04-20T20:20:59.100');
// const data = new Date('2019-04-20T20:20:59.1000');
// const data = new Date('2019-04-20 20:20:59');
// const data = new Date('2019-04-20 20:15:59');
// const data = new Date('2019-04-20 20:15:59.100');
const data = new Date(1792109745948);
console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
console.log('Mês', data.getMonth() + 1); // Mês começa do  zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
// console.log(Date.now());