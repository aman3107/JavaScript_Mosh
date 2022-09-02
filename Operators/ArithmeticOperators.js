let x = 3;
let y = 2;

// Arithmetic Operators

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x++);
console.log(x);

console.log(x--);
console.log(x);

let z = 10;
z += 4;
console.log(z);
z -= 4;
console.log(z);
z *= 2;
console.log(z);
z /= 2;
console.log(z);

let a = 1;
console.log(a > 0);
console.log(a >= 0);
console.log(a < 0);
console.log(a <= 1);

// Strict Equality Operator

console.log(a === 1);
console.log("1" === 1);
console.log(a !== 1);

// Lose Equality Operator

console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// ternary operators

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);
