// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this
const p1 = new Pessoa('Luiz', 'Miranda');
// Object.freeze(p1);
// p1.nome = 'Outra coisa';
delete p1.nome;
const p2 = new Pessoa('Maria', 'Miranda');
// p1.fala = function() {console.log('Oi');};

console.log(p1);
console.log(p2);
// p1.fala();
