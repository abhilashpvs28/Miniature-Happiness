//Functions
// Functions allows you to write a code once and use it multiple times.

//Benefits:

// 1)DRY:Dont Repeat Yourself 
//Functions helps eliminate repetition,Making code cleaner and reduce the chance of bugs.

// 2)Modularity:
//Function helps breakdown of complex program into smaller pieces.

// 3)Reusability:
// It allows you to write a code once and use it multiple times.

/*
function greet(namey){
    console.log(`Hello ${namey}`)
}

greet("Lokesh")
greet("Mahesh")

*/

// Functions can be defined in two ways
// 1)Function Declaration.
// 2)Function Expressions.

//Function Declaration
//*********************
//this is a function keyword and a name.
// function sayname(name){
//     console.log(`Hello ${name}`)
// }

//Function Expressions
//*********************
//this is function which is assigned to a variable.

// var sayName = function(name){
//     console.log(`Hello ${name}`)
// }

//sayName("Housing");


//Arrow Functions:
//****************
//in arrow function

// let jid = (name1)=> {
//     console.log(`Hello ${name1}`)
// }
// jid("Abhilash")

//Note:

//Arrow Function offer a shorter syntax and handle this contex differently compared to regular Expressions.
//Note: They do not have their own this context; instead, they inherit the this from their parent scope.
// name12 = "dfdf"
// const brand = {
//     name1:`Sony`,
//     greet: function(){
//         return `Welcome to brand new ${this.name1}`;
//     },
//     greetme: () => `Hello this is ${name12}`
    
// }

// console.log(brand.greet())
// console.log(brand.greetme())



//CALLback Function
//*******************
/*
function processUserInput(callback) {
    console.log("Loading...");
    setTimeout(callback, 2000); // Waits for 2 seconds and then calls the callback
}

function showCompletion() {
    console.log("Process completed!");
}

processUserInput(showCompletion);


function dataname(namey,takename){
    console.log("hi there, Welcom to the Arena")
    takename(namey);
}

function saymyname(name122){
    console.log("Gamer",name122)
}

dataname("Jaggernaut",saymyname)

*/

// let data = {
//     name : "akhil",
//     age : 25
// }
// delete data.place; 
// console.log(data.place)
// why because if we search for place property inside the data object its not present.
// thats why its showing defined.


// if you want your object to be immutable

// const data_per = {
//     name:"Team Liquid",
//     sex:"m"
// }
// Object.freeze(data_per)

// data_per["name"] = "Gamin";

// console.log(data_per)

// Object.seal(data_per)
// data_per["place"] = "HYD"

// data_per.name = "Tundra esports"
// console.log(data_per)


let data = "Abhilash Pvs"
let data_splt= data.split(" ");
    console.log(data_splt)

 let new_Data_longest_word = "";


 for (let i of data_splt){
    console.log(i,140)
    console.log(new_Data_longest_word,141)
    if(i.length > new_Data_longest_word.length){
        new_Data_longest_word = i; 
    }
 }


 console.log(`The longest word is: ${new_Data_longest_word}`);





