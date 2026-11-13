// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}
// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline
// $1 $2 $3 -> Retrovisores \1

// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú])+/g

// Não números
const naoNumerosRegEx = /\D/

// Valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida telefones
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm

// Validar senhas fortes
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/gm

// Validar emails
const validaEmails = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Permissiva)
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+ 


// Um texto que tem palavras acentuadas e quebras de linhas.
// Atenção, este é um texto para capturar todas as palavras.
// Mesmo que não  forem match de \w
// Vamos ver se seremos bem sucedidos.

// O CPF do fulano é: 124.557.895-22 (ok?)

// Texto de exemplo:
// 254.224.877-45
// 215.978.456-12
// 047.258.369-96
// 963.987.32a.00

// (35) 9 9999-5555
// (35)9 9999-5555
// (35)99999-5555
// 9 9999-5555
// 99999-4444
// 9999-9999
// 99995555
// 999995555
// 35999994444



// Válidos:
// email@example.com
// firstname.lastname@example.com
// email@subdomain.example.com
// firstname+lastname@example.com
// email@123.123.123.123
// email@[123.123.123.123]
// "email"@example.com

// Inválidos:
// email@example@example.com
// .email@example.com
// email.@example.com
// email..email@example.com

// Olá meu nome é luiz e meu email é luiz@gmail.com e isso é um teste.
// OU luizotáviomiranda@hotmail.com.br e isso também é teste.
// Maria@uol.com.brluiz+otávio@gmail.com.br teste final
// teste inicial luiz@ggmail.com.pa
// Mas olha que doido .doido@doido.doido (inválido)
// Mas olha que doido.doido.doido@doido.doido (válido)
// Quer dizer que agora  isso  funciona luiz@192.168.0.1 ok?

// email@example.com
// a    firstname.lastname@example.com b
// email@subdomain.example.com
// firstname+lastname@example.com
//     a   email@123.123.123.123 b
// email@[123.123.123.123]
//       "email"@example.com
// 1234567890@example
// email@example-one.com
// ______@example.com
// email@example.name
// email@example.museum
// email@example.co.jp
// firstname-lastname@example.com

// plainaddress
// #@%^%#$@#.com
// @example.com
// Joe Smith <email@example.com>
// email.example.com
// email.@example@example.com
// .email.@example.com
// email.@example.com
// email..email.@example.com
// ⼵⼡⼢⼣⼤⼥@example.com
// email@example.com (Joe Smith)
// email@example
// email@-example.com
// email@example.web
// email@111.222.333.4444
// email@example..com
// Abc..123@example.com

// List of Strange Invalid Email Address

// "(),:;<L[\]@example.com
// just"not"right@example.com
// this\ is "really"not\allowed@example.com
