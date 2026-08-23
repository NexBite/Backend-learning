Q: What is module.exports used for?

Answer:

module.exports is used in CommonJS to export values, functions, objects, or other code from a module so another module can import/use them with require().

Your practice

Now create those two files and run:

node app.js

If you get:

30

send me the output. Then we'll learn CommonJS with multiple functions, which will make module.exports much clearer before moving to ES Modules (import / export).

# ================= 2. Let's create ES Modules

2. Let's create ES Modules

Your current folder:

01-node-basics/
│
├── hello.js
├── math.js
├── app.js
├── node_modules/
├── package.json
└── package-lock.json

We're going to change math.js and app.js.

3. Tell Node.js to use ES Modules

Open:

package.json

Add:

{
  "name": "01-node-basics",
  "version": "1.0.0",
  "type": "module"
}

If your package.json already has other fields, don't delete them.

Just add:

"type": "module"

For example:

{
  "name": "01-node-basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
What does this do?

It tells Node:

Treat .js files in this package as ES Modules.

4. Change math.js

Replace the CommonJS version:

function add(a, b) {
    return a + b;
}

module.exports = add;

with:

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

Notice:

export function add(...)

We are exporting each function directly.

5. Change app.js

Now replace:

const math = require("./math");

with:

import { add, subtract, multiply } from "./math.js";

console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 5));
console.log("Multiplication:", multiply(5, 4));
Important!

Notice:

"./math.js"

not:

"./math"

With ES Modules, you should generally include the file extension for relative imports in Node.js.

6. Run it

In your terminal:

node app.js

Expected:

Addition: 30
Subtraction: 15
Multiplication: 20

🎉 You've now used ES Modules in Node.js.

7. Understand export

This:

export function add(a, b) {
    return a + b;
}

means:

Make add available to other modules.

Then another file can do:

import { add } from "./math.js";
8. Another way to export

Instead of:

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

you can write:

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

export {
    add,
    subtract,
    multiply
};

Both are valid.

9. Named exports

When you write:

export {
    add,
    subtract,
    multiply
};

these are named exports.

You import them using the same names:

import { add, subtract, multiply } from "./math.js";

The { } are important.

10. Default export

There is another important concept.

You can have a default export:

function add(a, b) {
    return a + b;
}

export default add;

Then import it:

import add from "./math.js";

Notice something:

Named export
export { add };

Import:

import { add } from "./math.js";
Default export
export default add;

Import:

import add from "./math.js";

No { } for the default import.

🧠 CommonJS vs ES Modules

This is an important interview topic.

CommonJS	ES Modules
require()	import
module.exports	export
Older Node.js module system	Standard JavaScript module system
Common in older Node projects	Common in modern JS projects

Example:

CommonJS
const math = require("./math");

module.exports = {
    add,
    subtract
};
ES Modules
import { add, subtract } from "./math.js";

export {
    add,
    subtract
};
🎯 Interview Questions
Q1. What is an ES Module?

An ES Module is a JavaScript module system that uses import and export to share code between files.

Q2. How do you enable ES Modules in a Node.js project?

One common way is adding:

"type": "module"

to package.json.

Q3. What is the difference between require() and import?
require("./math");

is CommonJS syntax.

import { add } from "./math.js";

is ES Module syntax.

Q4. What is a named export?

Example:

export function add(a, b) {
    return a + b;
}

It can be imported with:

import { add } from "./math.js";
Q5. What is a default export?

Example:

export default add;

It can be imported with:

import add from "./math.js";
🧪 Your Practice

Don't just copy the previous example. Build this yourself.

Create:

01-node-basics/
│
├── calculator.js
└── app.js
calculator.js

Create and export these functions:

add()
subtract()
multiply()
divide()
app.js

Import all four functions and test:

10 + 5
10 - 5
10 * 5
10 / 5

Expected:

Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2

Use ES Modules, not CommonJS:

export

and:

import

When it works, send me your calculator.js and app.js code. I'll review it like an interview/code-review exercise, then we'll move to process and environment variables, which are very important for real backend development.

CommonJS vs ES Modules

This is an important interview topic.

CommonJS	ES Modules
require()	import
module.exports	export
Older Node.js module system	Standard JavaScript module system
Common in older Node projects	Common in modern JS projects

Example:

CommonJS
const math = require("./math");

module.exports = {
    add,
    subtract
};
ES Modules
import { add, subtract } from "./math.js";

export {
    add,
    subtract
};
🎯 Interview Questions
Q1. What is an ES Module?

An ES Module is a JavaScript module system that uses import and export to share code between files.

Q2. How do you enable ES Modules in a Node.js project?

One common way is adding:

"type": "module"

to package.json.

Q3. What is the difference between require() and import?
require("./math");

is CommonJS syntax.

import { add } from "./math.js";

is ES Module syntax.

Q4. What is a named export?

Example:

export function add(a, b) {
    return a + b;
}

It can be imported with:

import { add } from "./math.js";
Q5. What is a default export?

Example:

export default add;

It can be imported with:

import add from "./math.js";