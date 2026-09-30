console.log(2 > 1);
console.log( 2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2 " > 1); // output will be true
console.log("02" > 1); // output will be true

//this is confusing and mostly avoided
console.log(null > 0); // op will false
console.log(null == 0); // op will false
console.log(null >= 0); // op will true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check 
console.log("2" === 2);

