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

// debuggin and console logging
let x1= 10;
let y2 = 20;
console.log("Before addition - x:", x1, "y:", y2);

let result = x1 + y2;
console.log("After addition - Result:", result);

//use try catch 
let diviser =0;
try{
  // if(diviser==0){
  //   throw new Error("connot divide by zero")
  // }
  debugger;
  let result = 10/diviser;
  console.log("Result :: ",result);
}catch(ex){
    console.error("Error ", ex.message);
}

// Function Expression:
// A function expression is similar to a function declaration, but it's assigned to a variable. 
//It can be named (in which case it's similar to a function declaration) or anonymous.

let sum2 = function qq(a,b){
  return a+b;
}
let resut= sum2(1,2);
console.log(result);

// Anonymous Function Expression:
///An anonymous function expression is a function without a name.
let anonymous = function(a,b){
  return a-b;
}
console.log(anonymous(4,3));

// Arrow Function:
//Arrow functions provide a concise syntax, especially for short functions.

let div =(a,b)=>a/b;
console.log(div(4,2));

function checkOadEven(a){
  if(a%2==0){
    return true;
  }else{
    return false;
  }
}

console.log(checkOadEven(1));

///Function with Default Parameters:
function power(base, exponent = 5){
  return Math.pow(base,exponent)
}

console.log(power(2));
console.log(power(2,3));

// === and ==

// === (Strict Equality):
// The === operator, also known as the strict equality
// operator, checks both value and type. It returns true if both operands are equal in value and type, and false otherwise.
let num1 = 5;
let num2 = "5";

console.log(num1 === num2); // false, because the types are different

// == (Equality):
// The == operator, also known as the equality operator, checks only the value. 
//It performs type coercion if the operands are of different types, trying to make them the same type before making the comparison.
let num3 = 5;
let num4 = "5";

console.log(num3 == num4); // true, because the values are equal after type coercion



