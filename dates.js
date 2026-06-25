let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toDateString())

// let mycreateddate = new Date(12, 3, 4, 0) 
let mycreateddate = new Date("2026-01-01")
console.log(mycreateddate.toLocaleString())

let newdate = new Date()

console.log(newdate)
console.log(newdate.getDay())

newdate.toLocaleString('default', {
    weekday: "long"
})