//Control structure
//1. Conditional Statement :if, if else, if -elseif-else, switch case
//2. Looping statement:
// //pre-tested loop:for, for-in, for-of, for-each, while and post tested loop:do-while
//3. Flow control: break and continue
//if-elseif-else
// if(condition){

// }
// else if(condition1){

// }
// else{

// }
//check if a number is positive, negative or zero
// let num=parseInt(process.argv[2]);
// if(num<0){
//     console.log("The number is negative")
// }
// else if(num>0){
//     console.log("The number is positive")
// }
// else{
//     console.log("The number is zero")
// }
// //switch-case
// //Display food menu for LBEF Canteen:
// //1. MoMo 2. Chowmein 3. Samosa 4. Chana Anda
// //Select food based on menu option
// console.log("=============LBEF Canteen MeNu================")
// console.log("1. Momo  \n 2. Chowmein \n 3. Samosa \n 4. Chana Anda ")
// let choice =15;
// switch (choice){
//     case 1:
//         console.log("MoMo is selected");
//         break;
//     case 2:
//         console.log("Chowmein is selected");
//         break;
//     case 3:
//         console.log("Samosa is selected");
//         break;
//     case 4:
//         console.log("Chana Anda is selected");
//         break;
//     default:
//         console.log("Invalid Option")
// }
// ///syntax for switch case
// /*switch(option){
//     case 1:
//         block of code;
//         break;
//     case 2:
//         block of code;
//         break;
//     case n:
//         block of code;
//         break;
//     default:
//         //message
    
// }
//         */

// //d. String

// /*let name=`Ramesh Thapa`
// let sentence =`
// I love Myself a lot,
// Youre doing great!!`
// console.log(name)
// console.log(sentence)

// //concatenation
// let fName='Sagar';
// let lName='Tamang';
// console.log(fName+" "+lName);
// let fullName=fName.concat("-",lName)//concatenates and takes 2 arguments 1arg=spacing 2arg=string
// console.log(fullName)
// console.log(fullName.repeat(4));// repeats the string

// */

// //accesing characters in string
// //1. Indexing
// let sport = "footBall";
// console.log(sport[0],sport[1],sport[2],sport[100])//returns undefined- in outofindex
// console.log(sport.charAt(0), sport.charAt(1),sport.charAt(2), sport.charAt(100))//returns empty string -in outofindexx
// console.log(sport.length)
// console.log(sport[sport.length-1])
// console.log(sport[sport.length-1], [sport.length-2],[sport.length -3]);

// //2. Slicing
// name="sapu shrestha"
// console.log(name.slice())
// console.log(name.slice(0,4))
// console.log(name.slice(5))
// console.log(name.slice(-4))

// let sentence='I love my self.'
// console.log(sentence.includes('le'))//includes just like in membership operator in pyp and returns true if subset is part of a set
// console.log(sentence.indexOf("self"))

// let word="    \n      Abishek Kunwar    ";
// console.log(word.trim())//removes extra whitespacces


//uppercase and lowercase
let name=`Ram Naresh Thankur`;
console.log(name.toUpperCase());
console.log(name.toLowerCase());