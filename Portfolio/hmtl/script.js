// total datatype we have is seven
// primitive datatypes
let number=12;
console.log(number);
console.log(typeof number);

let pi=3.14;
console.log(pi);
console.log(typeof pi);

let age;
console.log(age, typeof age);

let isStudent =true;
console.log(typeof isStudent)

let isLogin =false;
console.log(typeof isLogin)

let name="Aakriti"
console.log(name,typeof name)
//if the size of number is too big then we have the concept of bigInt in js: we have the practice of using n at last
let speed=300000000n;
speed=BigInt("100000000000000000000000")
console.log(speed, typeof speed);

let price=null;//null is mostly used with objects to empty out the objeect
console.log(price, typeof price);

let id=Symbol(990045);//symbol has to be unique -used in key of objects
console.log(id, typeof id);

// non-primitive datatypes
let studentInfo={
    "name": "Aakriti Limbu",
    age: 19,
    contact: "+977-9807654321",
    email: "aakriti@example.com",
    gender:"female"

}
console.log(studentInfo, typeof studentInfo);
//access just like python then
console.log(studentInfo.age, studentInfo["email"]);

//updating
studentInfo.email="example@aakriti.com";
console.log(studentInfo);

///adding new
studentInfo.address="maitidevi";
console.log(studentInfo);
//delete
delete studentInfo.contact
console.log(studentInfo);
//empty
studentInfo=null;
console.log(studentInfo, typeof studentInfo);

//create an empty object to store employee details.
//add employee name, address, email, salary and desigmnation
//display the employee details.
let employeeDetails={};
employeeDetails.ename="Kriti Poudel";
employeeDetails.address="baneshwor";
employeeDetails.email="kriti@gmail.com";
employeeDetails.salary=90000;
employeeDetails.designation="Manager";
console.log(employeeDetails);
//taking input

// operator in javasacript
//1. Arithematic operator(+,-,*,/,%,**)
let x=5;
let y=6;
console.log(x+y,x-y,x*y,x/y,x%y,x**y);
console.log(5%2, 7%2, 11%2);
console.log(y**3);

//2. Unary Operator(+,-,++,--,~)
let numberx=10;
let numbery=10;
console.log(-numberx,+numbery);
console.log(++numberx,--numbery);

//3. Comparision Operator9(>, <, <=, >=, ==, ===)
let num=10;
let letter="10";
console.log(num==letter,num===letter);
let num1="15";
let num2=15;
console.log(num1!=num2, num1!==num2);

//4. Assignment operator(=,+=,-=,*=,/=,%=,&&=,||=,??=)
let number=15;
//nullish assignment variable must be either undefined or null


//5. Logical operator(&&,||,!)yo ra conditional use garera eauta kam garchum


//6. Conditional Operator
//syntax:
//(condition)? Truecase:Falsecase
//check if the candidate is elligible to vote in LBEF CR election based on age and id card
let age=true;
let cid=true;
(age&& cid)? "is elligible" :"not elligible"
//7. Bitwise operator(&, |, ^ ,>>, <<,); converts all value to binary and compare corresponding bits
console.log(5<<1,7>>1)//converts all value to binaray and shifts left or right the 
let num=10;
console.log(num+1+(~num));