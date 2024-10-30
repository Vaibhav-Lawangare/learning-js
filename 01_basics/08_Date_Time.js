// Dates

let mydate = new Date();
console.log(mydate); // output: 2024-10-30T06:25:07.691Z
console.log(mydate.toString()); // output: Wed Oct 30 2024 11:55:07 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString()); // output: 10/30/2024, 11:55:07 AM


console.log(`my date is ${mydate.getDate()}/${mydate.getMonth()+1}/${mydate.getFullYear()} and time is ${mydate.getHours().toString().padStart(2, '0')}:${mydate.getMinutes().toString().padStart(2, '0')}`);

