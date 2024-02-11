let array = new Array();
//use array constroctore
let arr = new Array("AAA","bbb","ccc");
console.log(arr);

//using array literals
let arrLit = [1,2,2,3,5];
let arrLit1 = [];
console.log(arrLit);
console.log(arrLit1);
//push(): Adds one or more elements to the end of an array.
arrLit1.push("Hii");
console.log(arrLit1)
arrLit1.push(2);
console.log(arrLit1);

//unshift(): Adds one or more elements to the beginning of an array.
let newArr = ["vivek","ram","seeta"];
newArr.unshift("ashu");
console.log(newArr);
//[ 'ashu', 'vivek', 'ram', 'seeta' ]

//pop(): Removes the last element from an array.
newArr.pop();
console.log(newArr);
//[ 'ashu', 'vivek', 'ram' ]

//shift(): Removes the first element from an array.
newArr.shift();
console.log(newArr);
//[ 'vivek', 'ram' 'tes ]


//splice(): Adds or removes elements at a specified index.
newArr.splice(4,4,"Nishu");
console.log(newArr);
//[ 'vivek', 'ram', 'Nishu' ]

for(let i = 0 ; i<=newArr.length-1 ; i++){
    console.log(newArr[i]);
}
//vivek
// ram
// Nishu

newArr.forEach(function (a) {
    console.log(a);
});

//vivek
// ram
// Nishu

let up =newArr.map(function (a){
    return a.toUpperCase();
});
console.log(up);
up.forEach(function (anew){
    console.log(anew);
});

//[ 'vivek', 'ram', 'Nishu' ]
let newArray =new Array();
for(let i = newArr.length-1 ; i > -1 ; i--){
   console.log(newArr[i]);
    newArray.push(newArr[i]);
}
console.log(newArray);
//[ 'Nishu', 'ram', 'vivek' ]

//create Ojcet for litelers
let person ={
    name:"vivek",
    age: 23,
    sex: "male"
};
console.log(person.name,person.age,person.sex);

//Object construction
let person2 = new Object();
person2.name="add";
person2.id =10;
person2.sex="female";
person2.email="agc@gmail.com";
console.log(person2);
//{ name: 'add', id: 10, sex: 'female', email: 'agc@gmail.com' }

//Methods in Objects:
//Methods are functions that are defined as object properties.
// They allow you to encapsulate functionality within an object.
let person3 = {
    id:1,
    num:123,
    sex:"male",
    sayHello : function(){
        console.log("Hi Object funtion ",person3.id,person3.num,person3.sex);
    }
};
person3.sayHello();
//Hi Object funtion  1 123 male\


//json string representation an object

var jsonString = '{"Name":"Vivek","age":23,"sex":"Male"}';

// Logging the JSON string
console.log(jsonString);

// Parsing the JSON string to create a JavaScript object
var jsonObj = JSON.parse(jsonString);

// Logging individual properties of the JavaScript object
console.log(jsonObj.Name, jsonObj.age, jsonObj.sex);

var newJson = {
    name:"vivek",
    sex: "sex",
    Type:"add"
};
console.log(newJson);
var jsonToString = JSON.stringify(newJson);
console.log(jsonToString);






