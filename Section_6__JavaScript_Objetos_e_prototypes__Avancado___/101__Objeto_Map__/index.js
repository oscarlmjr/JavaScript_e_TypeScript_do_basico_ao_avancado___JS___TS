const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
]

// const novasPessoas = {};
const novasPessoas = new Map();
// for (const { id, nome } of pessoas) {
for (const pessoa of pessoas) {
    // console.log(id, nome);
    const { id } = pessoa;
    // novasPessoas[id] = { id, nome };
    // novasPessoas[id] = { ...pessoa };
    novasPessoas.set(id, { ...pessoa });
}

// for (const pessoa of novasPessoas) {
// for (const pessoas of novasPessoas.keys()) {
// for (const pessoas of novasPessoas.values()) {
//     // console.log(pessoa);
//     console.log(pessoas);
// }
novasPessoas.delete(2);
console.log(novasPessoas);
