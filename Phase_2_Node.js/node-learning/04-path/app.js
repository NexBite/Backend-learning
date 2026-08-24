import path from "node:path";

const filePath = path.join("03-fs", "message.txt");

console.log("Full path:", filePath);
console.log("File name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));