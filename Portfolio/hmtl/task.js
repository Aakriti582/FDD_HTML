//Write a JS program to add, update and remove below array object.
color=["Red","Green","Buel","Purple","Pink"]
//add "Black" at the end of the color
// remove second coloe-green
//update the spelling of incorrect color 
// check if the "Pink" exist in color or not ?
color.push("Black")
console.log(color)
color.splice(1,1);
console.log(color)
color.splice(1,1,"Blue");
console.log(color)
console.log(color.includes('Pink'));