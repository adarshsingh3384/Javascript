const value = 100
console.log(value)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)

// Presition value
 
console.log(balance.toFixed(2))

const othernumber = 213.23

console.log(othernumber.toPrecision(4))

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-AM'))

console.log(Math.max(2 ,3 ,3,  5 ,8))

console.log(Math.random())

console.log((Math.random() * 10 + 1) )  

const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min + 1) + min)))


// Notes

// the maths . floor make the value to the round off or absolute value
// the math . random make the random value every time 
// the formula to make the value in the between of any value is (math.floor(math.random() * (max-min+1)  =min))