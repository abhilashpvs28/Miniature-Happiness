//var message;
//console.log(message)

//Javascript Allows us to redeclare if its Var

//But in Case of LET if the message once declared and redeclared the value then it will throw you the error
// Error in case of let if redeclare Identifier 'message' has already been declared

//ex:


//***********************

    let message = "Hello there";
   // console.log(message)

   // let message;

   //error:Identifier 'message' has already been declared



//**************************

//Scope: scope in Javascript is a area were variable and function can be used.

//scope is like the "rules" that decide where you can access certain things in your code.

/* there are three types:
1)Global Scope.
2)Block Scope.
3)Function Scope.

*/

//1)Global Scope

/*
var name1 = "My name is Abhilash."

function callmyname(){
    console.log(name1)
}

callmyname();

*/

//2)Block Scope

/*
console.log(data)
 // It shows Undefined Cause Its not been defined and you want to access it.it has to be within the Scope.
if (true){
    let data = "Test the Block Scope."
    console.log(data)
}

*/

//3)Function Scope:
/*
console.log(myName,"11")
function saymyName(str){
    var myName = `${str} is my Name.`;
    console.log(myName)
}
console.log(myName,"22")

saymyName("Abhilash")
*/

//Hoisting:

/*
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before the code is executed. 

var x;  // Declaration is hoisted to the top
console.log(x);  // Output: undefined, because x is declared but not yet assigned a value
x = 5;  // Now x is initialized with the value 5

=> Funstions Are Hoisted in nature

greet();
function greet(){
    console.log("Hello EveryOne!!!")
}

Use const when you don’t want the variable to be reassigned. This makes your code more predictable and helps prevent bugs.
Use let when the value of the variable needs to change during the program (e.g., in loops or conditions).

let a = 10;
let b = a++;
console.log(b)
console.log(a);
*/

//here b is 10, 

// To Know which is bigger word.
/*
let word = "My Name is Jocker";


let data_word = word.split(" ");


let longest_word = data_word.reduce((a, b) => a.length >= b.length ? a : b);

console.log(longest_word)
*/




//String Methods:

//String Are Immutable means , They don't modify the original string.
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//slice : it doesnot change the Original array
//1) Want banana & cherry Only
let ext_slice = fruits.slice(1,3)
//console.log(ext_slice)

//If you want to take the -ve INdex take it
let ext_slice_1 = fruits.slice(-3)
//console.log(ext_slice_1)

//Copy the Enitre Array
let exc_data = fruits.slice();
//console.log(exc_data)


//Using Splice Method
/*
let color = ["blue","red","White","Brown","Purple","Green"];

let splice_data1 = color.splice(1,3,"a","b");
console.log(color,"OG")
console.log(splice_data1,"Modi");
*/


//using concat Method:

let data1 = ["1",2]
let data2 = [7,32]
let com_data = data1.concat(data2);
//console.log(com_data)

let com_data1 = data1.concat(2,[3,6]);
console.log(com_data1);