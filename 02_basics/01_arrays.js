//array
// how to create array

let arr = [1, 2, 3, 4, 5]; // can create directly using [] square brackets with initilizing with elements

console.log("arr",arr);

let arr2 = new Array(1, 2, 3, 4, 5); // can create using new keyword , here we don't need to use [] , directly give elementsin the constructor

console.log("arr2",arr2);

//Array methods

arr2.push(1); //to add element at the end
console.log("arr2",arr2);

arr.pop(); //to remove the last element
console.log("arr",arr);

arr.unshift(99); //to add element at the beginning
console.log("arr",arr);
arr.shift(); //to remove the first element
console.log("arr",arr);

console.log(arr2.includes(6)); // to check the element is present or not
console.log(arr2.includes(2));

console.log(arr2.indexOf(5)); //to get the index of the element
console.log(arr2.indexOf(6)); //if the element is not present it will return -1

const arr3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr3.join("-"); // to join the elements (we can use any character inside method to join elements)
console.log(arr3);
console.log(newarr);


//slice splice
const myarr =arr3.slice(2, 5); //to slice the elements
console.log(myarr);
console.log(arr3);

const myarr2 =arr3.splice(2, 3); //to splice the elements
console.log(myarr2); // splice
console.log(arr3); // using splice it will return the removed elements

console.log("-----------------");

const marvels =["thor", "ironman", "spiderman"];
const dc = ["batman", "superman", "flash"];

// marvels.push(dc); //to add element at the end
// console.log(marvels);
const heros=marvels.concat(dc); //storing both array while concatinating it into new variable 
console.log(heros);

const allheros = [...marvels, ...dc]; //using spread operator (...)
console.log(allheros);

const nestedarr= [1,2,3,[4,5],[6,[7,8]]]; //nested array
console.log(nestedarr);

const fixedarr= nestedarr.flat(Infinity); //to flatten the array nested array is fiexed in single arr
console.log(fixedarr);

