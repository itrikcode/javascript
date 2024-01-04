console.log("Hello");
let x = 10;
let y = 20;
console.log(x + y);

var a = 10;
console.log("loder variable :", a);
const b = 20;
//b = a+x
console.log("constent datatype ", b);

let s = "Hello";
console.log(s);
let bool = true;
console.log(bool);
let number = [10, 20, 30];
console.log(number);
let str = ["AA", "bb", "ccc"];
console.log(str);

//object data type
let person = {
  name: "John",
  age: 25,
  isStudent: true,
};
console.log(person.age, person.name, person.isStudent);
let max = 69;
if (max >= 90) {
  console.log("excelent");
} else if (max >= 70) {
  console.log("good job");
} else {
  console.log("keep practicing");
}

// Loops (for, while):
for (let i = 1; i <= 10; i++) {
  console.log(2 * i);
}
//while loop
let count = 0;
while (count <= 3) {
  console.log("Count : ", count);
  count++;
}

//Funtions
function add(a, b) {
  return a + b;
}

let sum = add(12, 8);
console.log(sum);
//Strings and String Concatenation:
let firstName = "vivek";
let lastName = "kumar";
let finalName = firstName + " " + lastName;
console.log(finalName);
