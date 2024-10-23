

//Js is Looseely Typed Language.
//Js is a Single Threaded language.

//Variables:

//Variables are Container for Storing Data Values.
//Variables are declared using the Kewords let,const,var.


//Variables are of 2 types:
//1)Primitive Datatyp, 2) Non-Primitive Datatyp

//1)Primitive:
//Primitive Data type are the basic types that represent a single Value.
//It is Immutable(cannot be modified directly).

// types of Primitive: String,Number,Boolean,undefined,null,symbol,bigint

/*
Ex: let myname = "Ananymous" //string

let num1 = 2; //number

let bool = true; //boolean

let x;
console(x); //undefined

let data = null; //null

let symbol = symbol('unique') //symbol

let bigint = 515646554654654658849n //Bigint

*/

// non-primitive Data type : Arrays,Object,Function.


/*
//Ex:
1) Function:
function greet(){
console.log("hello world")
}

2)Array:
let data = [1,2,3,4,5,6]

3)objetc:
let dataobj = {
name : "Ananymous",
age:30
}
*/

//Example of Declaring Variables:

//by using 1)Var 2)Let 3)Const
//var(function scope)
//let and const (Block scope [note :  with const you cannot be reassigned])

//with var in Block scope you cannot redeclare,but can be reassigned

//with const you cannot reassigned, but you can modified
/*
ex:
1)Const with ressasign
const data1 = {
    namey : "Animesh",
    age:26
}

data1 = {
    namey : "faine",
    age:16
} 

above case you are reassigning which is not correct on object iot is starting with const

2)const with modify;

const dataobj = {
    name1:"Abhilash",
    age:25
}

dataobj["name1"] = "Gautami"

console.log(dataobj)

*/

//**********************
//Hoisting:
//**********

//Hoisting is a javascript mechanism were variables and function declaration are moved to top of the Conatining scope.


//Hoisting with Var:
//*****************
/*
console.log(x,"1");
//above line means with hoisted:
//var x;
//console.log(x);  // undefined

var x = 10;
console.log(x,"2");
*/



//console.log 1 it will be undefined , x is hoisted but not intialized.

//console.log 2 it will now give output 10

//Hoisting with Let and Const:
//***************************
//let and const are also Hoisted but you will get error : Cannot access 'y' before initialization/
//it goes temporal dead zone = start of the block until the declaration is encountered

/*
console.log(y)  // ReferenceError: Cannot access 'y' before initialization
let y =12;

same with const too

//Hoisting with Function declaration:
//****************************************
what happens means the function will move to the top of the Declaration.

for ex:

greet()

function greet(){
console.log("Hello world")
}


*/

//Closures:
//************

//closures occours when one function comes under another function, in this case the inner function can access outer variables of the outer function even after the outer function is returned.

//For Ex:

/*

function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // innerFunction remembers outerVariable
    }

    return innerFunction; // Return the function itself, not the result of calling it
}

const closureFunc = outerFunction(); // outerFunction returns innerFunction
closureFunc(); // Now we're calling the returned innerFunction

*/






