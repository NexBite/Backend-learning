
// create file ............
// import fs from "node:fs";

// fs.writeFileSync("message.txt", "Hello from Node.js");

// console.log("File created!");

// Read File --------------------
import fs from "node:fs";

fs.writeFileSync("message.txt", "Hello from Node.js");

const data = fs.readFileSync("message.txt", "utf-8");

console.log("File content:", data);