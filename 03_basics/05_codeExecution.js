let val1=10;
let val2=5;
function add(num1,num2){
    return num1+num2;
}
let res1=(add(val1,val2));
let res2=(add(20,10));
/*
1.global execution context -> this 

2.memory phase
val1 -> undefined
val2-> undefined
add-> defination
res1-> undefined
res2-> undefined

3.execution phase
val1-> 10
val2-> 5

add-> new environmentor can say new sandbox is created for each function 
in that we have new variable environment + execution context
in new memory phase we have
al1 -> undefined
val2-> undefined
total=> undefined
also new execution contextfor this function have
num1-> 10
num2-> 5
total-> 15
this total is stored in res1 in global execution context
and then the new environment is deleted 

res1 =15;
again add-> new environmentor can say new sandbox is created for each function 
in that we have new variable environment + execution context
in new memory phase we have
al1 -> undefined
val2-> undefined
total=> undefined
also new execution contextfor this function have
num1-> 20
num2-> 10
total-> 30
this total is stored in res2 in global execution context
and then the new environment is deleted 

res2 =30;

*/