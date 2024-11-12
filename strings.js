let details = "   my name is abhilash.   "
let det1 = "age is 25"

//taking lenght
//console.log(details.length)

//charat,-1

//console.log(details.charAt(1))

//at

//console.log(details.at(1))

//slice

// let slice = details.slice(-9,-1)

//console.log(slice.toUpperCase())

//concat
// console.log(details.concat(" " + det1))


// 12/11

// let dataName = new String("Abhilash");

// console.log(dataName.length)
// console.log(dataName.toUpperCase())
// console.log(dataName.charAt(3))
// console.log(dataName.indexOf('l'))

// slice
// let sde = det1.slice(-9,-1)
// console.log(sde)
// let test1 = det1.replace("is","are")
// console.log(test1)

// console.log(details.trimEnd())

    let datadate = new Date();

    let day = String(datadate.getDate()).padEnd(2, '0')
    let month = String(datadate.getMonth() + 1).padEnd(2, '0')
    let year = String(datadate.getFullYear())
    console.log(`${day}/${month}/${year}`)