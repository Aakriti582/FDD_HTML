//function in JS
//1. Function declaration
/*in function declaration we define a function and call it later.
function declaration is hoisted function.
it is compulsory to give function name in function declaration
display "Hello World" using greet function
*/
function greet(){
    return "Hello sweetiee!!!";
}
console.log(greet());

//WAJP to create a multiplication function that takes 2 parameters and returns the output.

function mul(num1, num2){
    return num1* num2;
}
let mult =mul(5,5)
console.log(mult);
//sum with 3 parameters
function sum(a, b){
    return a+b;

}
console.log(sum(5,5))

//multiplication - with 1 parameter loop inside
function multi(m){

    for(let i=1;i<=10;i++){
        res=console.log(m,'*',i,'=' ,m*i)
}

}

multi(2)
//Variable length
//Write a JS function that accepts a variable length of arguments in parameters.--when the paraments is not equal to arguments.
function number(...arg){
    return arg;
}
result=number(100,200,300,400);//JS ma parameter ko lagi error hudaina but if i have to tae multiple input we need to give ... three dots and returns as an array object
console.log(result)
//create a JS function name order tahta ccepts multiple food order and return the order received
function order(...olist){
    return olist;
}
cartitems= order("waterbottle", "pen", "charger", "phone", "watch")
console.log("Yur order items are:",cartitems)

//Hoisting:- it is the function prperties of JS , where user can call function before the defination or declatation. it is only available for function declarations.
hresult = hnumber(30,40,50,70)
console.log(hresult);
function hnumber(...args){
    return args;
}
//Create a JS function name calc that takes two parameters and return sum, mul, and diff. Using function hoisting in it

calcresult=calc(5,10)
console.log(calcresult)
function calc(c,d){
    let sum= c+d;
    let mul = c*d;
    let diff=c/d;

    return `The sum is ${sum} \n the multiplication is ${mul} \n the difference is ${diff}`


}

//2. Function expression
//Display "Hello World' using greet function"
// const gree = function(){
//     return "How's your dayy?";
// };
// console.log(gree())