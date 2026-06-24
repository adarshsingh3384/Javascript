//string inter colasion

const name = "adarsh"
const age = 23

console.log(`The name is ${name} and my age is ${age}`)


// this is to find the keyvalue which bineds it with the object 
const gamename = new String("hellow")

console.log(gamename[0])

console.log(gamename.length)

console.log(gamename.toUpperCase())

// Substring

const newStringh = gamename.substring(1, 4)

console.log(newStringh);

//Trim 

const anotherstring = "      adarsh     "

console.log(anotherstring)
console.log(anotherstring.trim())

// Replace 


const url = "https:adarshas.com/adarsh%29singh"

console.log(url.replace('%29', '-')) 