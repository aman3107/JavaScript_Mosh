for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
  console.log("Hello Aman");
}

// WHile Loop

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// do while
let j = 0;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// for-in

const person = {
  name: "Aman",
  age: 22,
};

for (let key in person) {
  console.log(key, person[key]);
}

const color = ["red", "blue", "green"];

for (let index in color) console.log(color[index]);

// for -of

for (let colors of color) console.log(colors);
