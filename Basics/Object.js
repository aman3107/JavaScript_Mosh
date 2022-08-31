let person = {
  name: "Aman",
  age: 30,
};

// Dot Notation

person.name = "Payal";

// Brackets Notation

person["name"] = "kajal";

console.log(person);

// Arrays

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// Functions

function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("Aman", "Mittal");
greet("Kajal", "Mittal");

function square(number) {
  return number * number;
}

let ans = square(10);
console.log(ans);
