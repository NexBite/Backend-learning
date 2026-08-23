/* Javascripts importing 
const math = require("./math");

console.log("Addition:", math.add(10, 20));
console.log("Subtraction:", math.subtract(20, 5));
console.log("Multiplication:", math.multiply(5, 4));

/* ES Modules   */

// import { add, multiply, subtract } from "./math"

// import { add, subtract, multiply } from "./math.js";

// console.log("Addition:", add(10, 20));
// console.log("Subtraction:", subtract(20, 5));
// console.log("Multiplication:", multiply(5, 4));

import { add, subtract, multiply, divide } from "./calculator.js";

console.log("Addition:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
console.log("Multiply:", multiply(10, 5));
console.log("Divide:", divide(10, 5));