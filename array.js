let fruitsdata = ["Apple","Bannana","Chiku","Dates","Egg Fuits","Figs"]

// fruitsdata.push("ornage")


// fruitsdata.pop() //takes out last value of the array

// fruitsdata.unshift("jds") // to add an element on the starting of the array

//  fruitsdata.shift() // to remove the element on starting of the array    

// let include = fruitsdata.includes("Bannana") // it will give you Boolean if its there it will show you true or else false

//let include =  fruitsdata.indexOf("Chiku") // it will tell you the index of the value in array

//Slice,Splice

// let slicedata = fruitsdata.slice(-3)

let splicedata = fruitsdata.splice(0,2,"sdf","efe")
// .splice("start index","delete count")
console.log(fruitsdata,"orginal array")
console.log(splicedata,"sliced data"); 