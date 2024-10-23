// in his Let and Const got introduced.
//1)let and const 
// => it is a block scope level.
//     it can be reassigned
//     before you declare a variable and want to access it the it will throw a refernce Error.(TDZ)
//     TDZ is nothing but if you want to access the variablw without declaring it will got to (TDZ)
//     same with const also but once you declare the variable you cannot reassigned it.
//     it is also a block scope level.

// 2)Arrow Function:
//Arrow function comes with short syntex and this used is lexical.

// 3)Template Literals
// 4)Rest and Spread Operatos

//rest

// function sum(...numbers){
//     return numbers.reduce((total,num)=> total + num ,0)
// }

// console.log(sum(1,2,3,4,5))

//spread 

// const nums = [1,2,3];
// const morenum = [...nums,4,...nums,5,6]

// console.log(morenum)

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
  ];
  
  // Destructuring within a loop
  users.forEach(({ id, name }) => {
    console.log(`User ID: ${id}, Name: ${name}`);
  });
  users.forEach((res) => {
    console.log(`User ID: ${res.id}, Name: ${res.name}`);
  });

