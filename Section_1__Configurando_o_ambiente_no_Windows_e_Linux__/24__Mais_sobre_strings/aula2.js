//                  01234567
let quatroString = "Um texto";

console.log(quatroString.match(/[a-z]/g));
console.log(quatroString.match(/[a-z]/));
console.log(quatroString.search(/[a-z]/));
console.log(quatroString.search(/[a-z]/g));
console.log(quatroString.search(/x/));
console.log()

console.log(quatroString.replace('Um', 'Outra'));
console.log(quatroString.replace(/Um/, 'Outra'));
console.log()

//               0123456789
let umaString = "O rato roeu a roupa do rei de Roma."

console.log(umaString.replace(/r/, '#'));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log()

console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5));
console.log(umaString.slice(30));
console.log(umaString.slice(-5, -1));