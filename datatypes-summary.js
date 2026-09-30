// Primitive 

// are in 7 categories : String, Number , boolean , null, undefined, symbol, BigInt

//const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3142593261354291641549103713689n


//Non primitive or reference type

//arrays,objects,functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = 
{
    name: "kashifa",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);
console.log(typeof heros );
console.log(typeof bigNumber);

console.log(typeof anotherId);

//*Return type of variables in JavaScript
//1) Primitive Datatypes
  //     Number => number
  //   String  => string
  //     Boolean  => boolean
  //     null  => object
  //     undefined  =>  undefined
  //     Symbol  =>  symbol
  //     BigInt  =>  bigint

//2) Non-primitive Datatypes
     //  Arrays  =>  object
     //  Function  =>  function 