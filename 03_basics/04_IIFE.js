// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    console.log("hello");

})() ;
// (;) semicolon helps to stop the invoked function , either it eill continue execution

((name)=> {
    console.log(`hello ${name}`);

})("vaibhav") 