//taking input from command line interface
let name=process.argv[2]
console.log(name,typeof name);
// area
let length = parseInt(process.argv[3])// 1 index chai its for the path and goes by 2 3  4
let breadth = parseInt(process.argv[4])//by default string huncha so we have to use parseInt
let area=length* breadth
console.log("Area is ", area)