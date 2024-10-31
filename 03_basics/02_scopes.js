let a=300;
if(true){
    let a=200;
    console.log("if block a",a);
}
console.log(a);

//scopes levels

function one (){
    const username = 'vaibhav';
    function two(){
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website); // as website is not defined in this scope ,it is inside function two()
    two();
}
one();

//hoisting
console.log(addOne (5));
function addOne(x){
    return x+1;
}

addTwo (5);
const addTwo = function(x){
    return x+2;
} // as addTwo is kept in the variable and as per hoisting variable is created at the top of the code and function are called after variable declaration
