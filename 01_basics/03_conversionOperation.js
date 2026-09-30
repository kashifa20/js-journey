//let score = 33 output will be number
let score = "33abc" // output will be string 

//if score will be null so output will be 0
//if score value is undefined so output will be nan
//if score value is boolean true or false output will be 1 or 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // output will be NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true; 0 = false
//""= false
// kashifa = true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


