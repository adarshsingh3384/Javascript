// Premitive

// There are 7 types of datatype :-
// string , number , bigint , boolean , null , undefined , symbol

//symbol example 
const id = Symbol('123')
const valueid = Symbol('123')

console.log(id == valueid)

// Reference type (non permitive)

// Array , Object , Function
// Array

const data = ["hello" , "gay" , "ide"];


// function
const myfunction = function() {
    console.log("hello world")
}

// object 
let myobj = {
    name:  "Adarsh",
    age:  23

}


// Stack (Premitive type)        Heap (non Premitive type)

let idemail = "adarsh@gmail.com";

let toemail = idemail;
    toemail = "ada@gmail.com"

console.log(toemail)
console.log(idemail)

let adata = {

    email: "adar@gmail.com",
    user: "adarsh"

}

let todata = adata;
adata = "lala@gmail.com"

console.log(adata)
console.log(todata)