const data = {
    name : "Avinash",
    greeting : function(greeting){
        console.log(`${greeting} , my name is ${this.name}`)
    }
}

const ote = {name : "Austin"};

data.greeting.call(ote, 'JIDE')