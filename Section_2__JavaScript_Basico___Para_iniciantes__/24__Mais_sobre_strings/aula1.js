let umaString = "Um \"texto\"";
let duasString = "Um \texto\"";
let tresString = "Um \\texto\"";

console.log(umaString);
console.log(duasString);
console.log(tresString);
console.log()
//                  01234567
let quatroString = "Um texto";

console.log(quatroString[4]);
console.log(quatroString[8]);
console.log(quatroString[-1]);
console.log()
console.log(quatroString.charAt(6));
console.log(quatroString.charAt(8));

console.log(quatroString.concat(' em', ' um', ' lindo dia.'));
console.log(quatroString + ' em', 'um', 'lindo dia.');
console.log(`${quatroString} em um lindo dia.`);
console.log()
console.log(quatroString.indexOf('texto'));
console.log(quatroString.indexOf('Texto'));
console.log(quatroString.indexOf('Um'));
console.log()
console.log(quatroString.indexOf('o', 3));
console.log(quatroString.lastIndexOf('o'));
console.log(quatroString.lastIndexOf('o', 3));
console.log(quatroString.lastIndexOf('m', 3));

