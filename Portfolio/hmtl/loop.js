//pre conditional loop
// for loop:
//syntax: for (initilization, condition, increment/decrement){
// block of code;
// };
// Display  to 50 using for loop
for(let i=0; i<=50;i++){
    console.log(i)
}
//calculate multiplication table of 7
for(let i=1;i<=10;i++){
    console.log(`7*${i}=${7*i}`)
}
//countdown from 10-1
for(let i=10;i>=1;i--){
    console.log(i)
}
//while loop
//syntax:
/*itilixation
while(condition)
{
    block of code;
    increment/decrement
}
    */

// display 1-10 using while loop
let j=0;
while(j<=10){
    console.log(j);
    j++;
}
// Display even umber between 1-100
let k=1;
while(k<=100){
    if (k%2==0){
        console.log(k)
    }
    k++;
}
//do -while loop
//syntax:
/*
initilixation
do{
        increment/decrement
}while(condtion);
*/

//Display descending value from 15-1
let p=15;
do{
    console.log(p);
    p--;
}while(p>=1)

//count odd numbers between 1-50.
let count=0;
let c=1;
do{
    if(c%2!=0){     
    count+=1;
    console.log(c);
    }
    c++;
    
}while(c<=50)
console.log(count)
// for-in loop==Highly recommended for plain object
favCelebrity={
    Name:"Mr Beast",
    Country:"USA",
    Age: 34,
    SocialMedia: "YouTube"
};
for(let data in favCelebrity){
    console.log(data, favCelebrity[data]);
}
// for-of loop==Highly recommended for array-object
roomTemperatureMonday=[16,17,18,19,20,22,25,25,24,23,22]
for(let temperature of roomTemperatureMonday){
    console.log("Room temperature",temperature,"Degree celsius")
}
// for-each loop

//post conditional loop
//do-while loop
