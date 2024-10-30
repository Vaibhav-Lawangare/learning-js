//object 
let mysum =Symbol("key1");
const user ={
    name: 'vaibhav',
    age: 22,
    'email': 'abc@gmail',
    location: 'mumbai',
    [mysum]: 'newkey',

}

console.log(user.age); //op : 22
// console.log(user.email); //op : error because key is defined as string

// another way to access is
console.log(user['email']); // as the key is in string format we have to define it as string
console.log(user[mysum]); // as the key is in symbol format we have to define it as symbol

user.location = 'pune';
console.log(user);  
// Object.freeze(user); // no new reinitilization will be allowed
// user.location = 'nagpur';
// console.log(user);

user.greeting = function(){
    console.log(`hello ${this.name}`);
}

user.greeting();

console.log("-----------------------------");

const newuser= new Object(); 

newuser.name = 'vaibhav';
newuser.age = 22;

console.log(newuser);


const newuser2 = {
    newuser
}
console.log(newuser2);

//comnbining 2 objects

const num1 = {1:'one', 2:'two', 3:'three'};
const num2 = {4:'four', 5:'five', 6:'six'};
const combine = Object.assign({}, num1, num2);
console.log(combine);

const usespread= {...num1, ...num2};
console.log(usespread);
console.log(Object.keys(usespread));
console.log(Object.values(usespread));
console.log(Object.entries(usespread));


//object destructuring

const { age} = user;
console.log(age);

const { name: myname, age: myage} = user;
console.log(myname);
console.log(myage); 