"use strict"; //treat all JS code as newer version

// alert(3+3); //we can't use alert in strict mode

let name = "vaibhav"; //string can be in "" or ''
let age = 22; //number , if number i big we can use bigInt
let isMarried = false; //boolean to be true or false
let address = null; //null  -> it's a standalone value
let phone ; //undefined , if we don't assign any value it will be undefined

//we can check datatype using typeof keyword
console.log(typeof name);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof address); // the reason null is considered an object in JavaScript is due to historical design choices in the languages
console.log(typeof phone);
// output: string, number, boolean, object, undefined
console.log("-------------------------------------");

//datatype conversion

//ex
let Age = "22";
console.log(typeof Age); //string
Age = Number(Age);
console.log(typeof Age); //number
let Age2 = undefined;
console.log(typeof Age2); 
Age2 = Number(Age2); 
console.log(typeof Age2); 
console.log(Age2)
// if string to number -> number but string contain any chracter -> NaN
//if boolean to number -> 1 or 0 (t ot f)
//if null to number -> 0
//if undefined to number -> NaN

console.log("-------------------------------------");

// boolean
// if   