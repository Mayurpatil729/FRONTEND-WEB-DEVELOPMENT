// # JAVASCRIPT                                                  
// In 1995 by Brendan Eich

// ## ROLE OF JAVASCRIPT.

// 1. JavaScript which is often known as JS, is a high-level dynamic interpreted programming language.
// 2. It ållows client-side scripting to create completely dynamic web applications and websites.

// 1. JavaScript was initially designed for making pages "alive"
// 2. Scripts can be executed in the browser itself.
// 3. JavaScript and Java are different programming languages
// 4. It can be executed on the browser as well as the server
// 5. JavaScript is a safe language when used in browser
// 6. There are languages that get "transpiled" to JavaScript

//Case sensitive 
//Dynamically changed language



//To print on console.
console.log("Hello world");

// constant cannot be changed
// let cannot be declared
//var can be declared
//let is used to declared variables and blocked scopes.

var a = 45;
// let b = "Mayur";
var c = null;
var d = undefined;
{
  let b = "this";
  console.log(b);
}

console.log(b);

//Primitive Datatypes
//nn bb ss u
let a = null;
let b = 345;
let c = true;
let d = BigInt("729");
let e = "Mayur";
let f = symbol("I am nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//Non Primitive Datatypes.
// Objects
const item = {
  Mayur: true,
  Nikhil: flase,
  uday: 69,
  Mohan: undefined,
};

console.log(item["Mayur"]);
