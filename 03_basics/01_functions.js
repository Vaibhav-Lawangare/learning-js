// function sayMyName() {
//     console.log("V");
//     console.log("a");
//     console.log("i");
//     console.log("b");
//     console.log("h");
//     console.log("v");
// }

// sayMyName();

//paramatrized function
function add(num1,num2) {
    console.log(num1+num2);
}

add(2,3);
add(10,20);
add(100,200);

function sub(num1,num2) {
    // let res= (num1-num2);
    // return res;
    return num1-num2;
}

let result = sub(10,5);
console.log(result)


function loginusername(username) // we can also pass a default value like loginusername(username='vaibhav')
{
    if (!username) {
        console.log('please enter username');
        return;
    }
    return `${username} is logged in`;
}

console.log(loginusername(''))

console.log("-------------------");

function grouped(var1,var2,...num) {
   return num
    
}

console.log(grouped(100,200,300,400,500));


const user ={
    name: 'vaibhav',
    age: 22,
    'email': 'abc@gmail',
    location: 'mumbai',

}
function printUser(anyuser){
   return console.log(`name is ${anyuser.name} and age is ${anyuser.age}`);
    
}
printUser(user)
printUser({
    name :'abc',
    age : 23,
})

const newArray = [1,2,3,4,5];
function returnSecondValue(getArray){
    return getArray[1];
}
returnSecondValue(newArray);