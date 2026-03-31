// for (let i=10; i>=0;i--){
//     console.log(i)
// }

// let arr =["superman","batman","wonderwomen","flash","greenlanton"]
// for(let i=arr.length-1; i>=0;i--){
//     console.log(arr[i])
// }

// const letslearnUsersArray=[{
//     name:"saugat Bagale",
//     age:23,
//     isLogin:true
// },{
//     name:"Nishant",
//     age:24,
//     isLogin:false
// },
// {
//     name:"Aakriti",
//     age:22,
//     isLogin:true
// },
// {
//     name:"subin",
//     age:19,
//     isLogin:false
// }
// ]
// for(let i=0; i<letslearnUsersArray.length;i++){
//     console.log(letslearnUsersArray[i].name)
// }

const letslearnUsersArray=[{
    name:"saugat Bagale",
    age:23,
    isLogin:true
},{
    name:"Nishant",
    age:24,
    isLogin:false
},
{
    name:"Aakriti",
    age:22,
    isLogin:true
},
{
    name:"subin",
    age:19,
    isLogin:false
},
{
    name:"kamala",
    age:19,
    isLogin:true
},
{
    name:"suman",
    age:19,
    isLogin:false
}]

for(let i=0; i<letslearnUsersArray.length;i++){
    if(letslearnUsersArray[i].isLogin === true){
        console.log(letslearnUsersArray[i].name)
    }
}