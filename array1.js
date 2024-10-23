// Shallow Copy:
// let dataorig = [1,2,{c:3}];
// let shallowcopy = [...dataorig];
// shallowcopy[2].c = 4

// console.log(dataorig)
// console.log(shallowcopy)

// Deep Copy:
//Your original array will stay as it is the changes comitted on nested array will remain changed but not to original aaray


let daata = ["Grapee","Apple","Mango","Papaya","Guava"]

//data push

//daata.push("chiku")


//data pop

//daata.pop()


//data unshift (add one or more elemnts in the beggining)

//daata.unshift("Goosseberry","Custard Apple")


//splice adds or remove elements from an array at a specific index
//daata.splice(1,2,"Sapota","Cocunut")  // on here 1 is indicating the index and 2 is indication 2 element from index 1 
//(index,remove element,add1,add2...)

//using slice
let slicedata = daata.slice(2)
console.log(slicedata)
console.log(daata)
