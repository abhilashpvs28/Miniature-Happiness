// Stack (Primitive) and Heap (Non- Primitive)

// object and array will got to non primitive data typeof
// and string number boolean will go to stack Memory


// Non Primitive Type Of Object It will give refernce from the heap.
/*
let user1 = {
    name : "Asid",
    Birth : "HYD"
}

let user2 = user1;

user2.name = "Akshay"
console.log(user1.name)
console.log(user2.name)



// here first it will keep in stack and data will there in our heap memory ok.
// and for user2 also it will give the same reference as in case of refernce of user 1.

Primitives (Stack): Stored directly in memory, faster access because they are directly held in the stack.
Objects (Heap): Stored indirectly as references, with actual data residing in the heap. Objects can be large and more complex, 
so the heap is used for dynamic memory allocation.

*/