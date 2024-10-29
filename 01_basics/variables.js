const id =101; //value should be initilized with keyword const
//we can't reinitialize the variable declared with kewqord const

console.log(id); // output: 101

//if we reinitialize the variable we will get error
// id=102;
// console.log(id); 
///home/vaibhav/Desktop/Practice/variables.js:5
// id=102;
//   ^

// TypeError: Assignment to constant variable.

let email = "abc@gmail.com"; //if we use let we can reinitialize as well as we can declare it without initilizng any value
var password = "123456";
address ="mumbai";
//we can reinilize the variable declared with keyword let and var 
email = "xyz@gmail.com";
password = "654321";
address = "pune";
//we have to print all the variables but so we can use console.log() as well as console.table()---> can arrange the data in tabular form

console.table({id,email,password, address})
// // (index)  │ Values          │
// ├──────────┼─────────────────┤
// │ id       │ 101             │
// │ email    │ 'abc@gmail.com' │
// │ password │ '123456'        │
// │ address  │ 'mumbai'        │
// └──────────┴─────────────────┘

//Variables declared with var are function-scoped, meaning they are accessible throughout the function they’re declared in, not just the block they’re in.
//example
if(true){
    var x = 10;
    console.log(x); // 10
}
console.log(x); // 10
// means var is declared in if block but we can access it outside , as it should not happen
 