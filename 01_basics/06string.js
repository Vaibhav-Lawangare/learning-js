const name = "vaibhav";
const repocount=1;
//console.log(`my name is ${name} and i have ${repocount} repo`);

const gameName = new String("valorant");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const anotherString = gameName.substring(0, 4);
console.log(anotherString)

const yetAnotherString = gameName.slice(-7 , 4);
console.log(yetAnotherString) 

const newString = "   vaibhav   ";
console.log(newString);
console.log(newString.trim());  //output: vaibhav

const url = "https://vaibhav.com/vaibhav";
console.log(url.replace("vaibhav", "vaibhav2"));
console.log(url);

