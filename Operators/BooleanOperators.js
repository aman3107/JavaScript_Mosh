// Logical AND(&&)
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let highIncome = true;
let goodCreditScore = true;

let approveLoan = highIncome && goodCreditScore;

console.log(approveLoan);

// logial OR(||)

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

approveLoan = highIncome || goodCreditScore;
console.log(approveLoan);

// Logical NOT(!)

let applicationRefuse = !approveLoan;

console.log(applicationRefuse);

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// Bitwise Operators
