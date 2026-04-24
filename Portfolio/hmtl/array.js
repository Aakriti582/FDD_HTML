//Array-collection items non-primitive datatype

const fruits=["apple","bananna","cherry","mango",1, true]
console.log(fruits, fruits.length, typeof fruits);
console.log(fruits[3]);
console.log(fruits.slice())
console.log(fruits.slice(1,3))
//add item in array
fruits.push('oragne')//adds item in the end 
console.log(fruits)

fruits.unshift('litchi')//adds items at the start of the array
console.log(fruits)
//remove item in array
fruits.pop();//remove item at the end of the array
fruits.shift();// remove item at the start of the array
console.log(fruits)
//update
fruits[0]="Jack Fruit";
console.log(fruits);
console.log("IS banana in fruits array?", fruits.includes('bananna'))
let sentence=["I", "am", "hungry"];
let str= sentence.join(" ")//joins array object  and convert it into string
let arraySentence =str.split(" ");//converts string into array object-need to declare the seperator otherwise whole string is cnverted into array object
console.log(str);
console.log(arraySentence);

//splice=(add item, update item, remove item)
const sport=["cricket","Football","Volleyball","Kho Kho"];
//arr.splice(index, removeitem, item1, item2,.......)
//remove item
//to remove we give only 2 index
sport.splice(1,2);
console.log(sport);
//add item
//to add items the remove index should be 0 and we should give the items to add
sport.splice(1,0,"Tennis","Chess")
console.log(sport);
//update item
//to update items its same like the remove instead we give the missing deleted paramenetrs
sport.splice(0,2,"Badmintion","Baseball");
console.log(sport);
console.log(sport.indexOf("Chess"));
