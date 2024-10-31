const user = {
    username : 'vaibhav',
    bookPrice: 200,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to our website`);
        
    }
}

user.welcomeMessage(); // Output: vaibhav, welcome to our website
user.username= "vaibhav2";
user.welcomeMessage(); // Output: vaibhav2, welcome to our website

//Arrow functions

const add = (num1,num2) => num1+num2; // it implicitly returns (samaj vo khud mann ke le raha hai ki vaha pe return ho raha hai)

console.log(add(2,3));

const myarr = [1,2,3,4,5];

myarr.map((num) => console.log(num*2)); //mappinfg the array and performing operation
