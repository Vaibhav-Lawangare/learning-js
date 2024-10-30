const score =200;
console.log(score);

const balance = new Number(10);
console.log(balance);
console.log(balance.toString().length); //to get the length of the number
console.log(balance.toFixed(2)); //to round off the number
const num = 29.890;
console.log(num.toPrecision(3)) //to get the precision of the number means 3 digits after decimal

const num2 =1000000000;
console.log(num2.toLocaleString("en-IN")); //to get the number in Indian format


console.log("-----------math------------");
// console.log(Math);

console.log(Math.abs(-4));  //to get the absolute value means +4 and if we already have positive number it will return same
console.log(Math.round(4.6)); //to round off the number
console.log(Math.ceil(4.1)); //to round off the number but using ceil it will round off to next number ;
console.log(Math.floor(4.9)); //to round off the number but usinf floor it will round off to the number as it is without decimal value
console.log(Math.min(4,3,2,1));
console.log(Math.max(4,3,2,1));

console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10)+1);

const min= 10;
const max= 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
