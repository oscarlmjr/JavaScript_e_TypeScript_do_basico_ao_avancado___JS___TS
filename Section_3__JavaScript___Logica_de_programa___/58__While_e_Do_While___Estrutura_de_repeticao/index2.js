function random(min, max) {
    // const r = Math.random();
    // const r = (max - min) + min;
    const r = Math.random() * (max - min) + min;
    // return r;
    return Math.floor(r);
}

// const min = 1;
const min = 5;
// const max = 20;
const max = 15;
// let rand = random(min, max);
let rand = 10;

while (rand !== 10) {
    // rand = random(min, max);
    console.log(rand);
}
console.log('#######');

do {
    // rand = random(min, max);
    console.log(rand);
}while(rand !== 10);

// console.log(rand !== 10);
