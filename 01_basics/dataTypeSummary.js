//Primitives

// 7types : String, Number, Boolean, Undefined, Null, Symbol, BigInt

//symbol example
const id = Symbol('12');
const id2 = Symbol('12');
console.log(id === id2); 

const bignum = 9007199254740991n; //to declare n in last so we can get datatype as bigint
console.log(typeof bignum);
//Reference (Non primitive)

//Array, Object, Function

const heros = ['thor', 'spiderman', 'ironman'];
let myObj = {
    name: 'vaibhav',
    age: 22,
};

let myFunc = function () {
    console.log('hello');
};

console.log("-----------------------------")

//Stack (primitive)

let a=10;
let b= a;
b=20;
console.log(a,b);

//Heap (Non primitive)

let user1={
    email: 'abc@gmail',
}
let user2 = user1;
user2.email = 'xyz@gmail';
console.log(user1.email);
console.log(user2.email);