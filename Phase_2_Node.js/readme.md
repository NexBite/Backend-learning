Phase 2 — Node.js
Step 1 — Check your setup

Open VS Code.

Open the terminal:

Ctrl + `

or:

Terminal → New Terminal

Then run:

node --version

and:

npm --version

You should see something similar to:

v22.x.x

and:

10.x.x

Your exact versions may be different, and that's okay.

What are these?
node --version

checks your installed Node.js version.

npm --version

checks your installed npm version.

Step 2 — What is Node.js?

This is the first concept you need to understand.

Simple definition

Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.

Normally you learned JavaScript like:

JavaScript
    ↓
Browser
    ↓
Chrome / Edge / Firefox

For example:

console.log("Hello");

The browser's JavaScript engine executes it.

With Node.js:

JavaScript
    ↓
Node.js
    ↓
Your computer/server

So you can write:

console.log("Hello Node.js");

and execute it directly from your terminal.

Step 3 — Why was Node.js created?

Before Node.js, JavaScript was primarily associated with browsers.

JavaScript:

Browser
   ↓
Web page
   ↓
UI interaction

Node.js made it possible to use JavaScript for server-side programming.

Now you can build:

Web Servers
REST APIs
Backend Applications
CLI tools
Real-time applications
Scripts

For example:

React Frontend
      ↓
HTTP Request
      ↓
Node.js Backend
      ↓
Database
      ↓
JSON Response

This is exactly where you're heading.

Step 4 — Node.js is NOT a programming language

This is an important interview question.

JavaScript is the programming language.

Node.js is the runtime environment.

Think:

JavaScript
    ↓
Programming Language

Node.js
    ↓
Runtime Environment
Interview question

Q: Is Node.js a programming language?

Answer:

No. Node.js is a JavaScript runtime environment that allows JavaScript to execute outside the browser.

Step 5 — What is a runtime?

A runtime provides the environment required to execute a program.

For JavaScript:

JavaScript code
       ↓
Runtime
       ↓
Execution

Browser:

Chrome
  ↓
V8
  ↓
JavaScript

Node.js:

Node.js
  ↓
V8 + Node APIs
  ↓
JavaScript

This distinction will become very important when we learn:

fs
path
http
process

because these are Node.js capabilities.

Step 6 — V8 Engine

You may have already heard of V8.

V8 is Google's JavaScript engine.

It is used by Chrome and Node.js.

Think:

                 V8
                /  \
               /    \
          Chrome    Node.js
             ↓        ↓
          Browser   Server

V8 executes JavaScript.

Node.js then provides additional APIs and capabilities around the JavaScript engine.

For example, Node gives you:

fs
path
http
process

These are not ordinary browser APIs.

Step 7 — Let's actually run Node.js

Create a folder somewhere convenient.

For example:

D:\node-learning

Open that folder in VS Code.

Create:

01-node-basics

Inside it create:

hello.js

Put:

console.log("Hello from Node.js");

Now open the terminal in that folder and run:

node hello.js

You should get:

Hello from Node.js

🎉 You just executed JavaScript without a browser.

Step 8 — Try something more interesting

Change hello.js:

const name = "Aditya";

console.log(`Hello ${name}`);

Run:

node hello.js

Output:

Hello Aditya

You are now running JavaScript directly using Node.js.

Step 9 — Node.js can access your computer

This is where Node becomes interesting.

Browser JavaScript is intentionally restricted.

For example, a normal website shouldn't be able to freely do:

Read arbitrary files from your hard drive
Delete files
Access system information
Open network servers

Node.js provides APIs that allow server-side programs to perform many of these operations under the operating system's permissions.

For example:

const fs = require("fs");

or, with modern ES modules:

import fs from "fs";

We'll learn fs later.

Step 10 — npm

Now we reach another very important concept.

npm = Node Package Manager

It helps you:

install packages
manage dependencies
run scripts
publish packages

For example, eventually you'll install Express:

npm install express

Then:

Your Project
     ↓
npm
     ↓
Express
     ↓
Node.js Backend
Step 11 — Create your first Node project

Inside:

01-node-basics

run:

npm init

It will ask several questions.

For now, you can accept the defaults by pressing Enter.

Or use:

npm init -y

This automatically creates:

package.json
Step 12 — What is package.json?

This file describes your Node.js project.

You'll see something like:

{
  "name": "01-node-basics",
  "version": "1.0.0",
  "main": "hello.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

Don't worry about every field yet.

The important idea is:

package.json is the configuration/metadata file for your Node.js project.

It can contain:

Project name
Version
Scripts
Dependencies
Module configuration
Other metadata
Step 13 — package-lock.json

Later, when you install a package:

npm install express

npm creates:

package-lock.json

The lock file records the resolved dependency versions and dependency tree so installations can be reproduced more consistently.

So you'll commonly see:

node-learning/
│
└── 01-node-basics/
    │
    ├── hello.js
    ├── package.json
    └── package-lock.json
🎯 Your first practice

Don't move to modules yet.

Do these steps yourself.

Practice 1

Create:

node-learning
└── 01-node-basics

Create:

hello.js

Write:

console.log("Hello from Node.js");

Run:

node hello.js
Practice 2

Change it to:

const name = "Aditya";
const age = 25;

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);

Run:

node hello.js
Practice 3

Initialize npm:

npm init -y

Then check that these files exist:

hello.js
package.json
package-lock.json

Small correction: npm init -y itself normally creates package.json, but package-lock.json is typically created by an npm install command, not by npm init -y. So if you don't see package-lock.json yet, that's completely normal.

🎤 Interview Questions — Node.js Basics
Q1. What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

Q2. Is Node.js a programming language?

No. JavaScript is the programming language; Node.js is the runtime.

Q3. What engine does Node.js use?

Node.js uses Google's V8 JavaScript engine.

Q4. Why is Node.js used for backend development?

It allows developers to use JavaScript on the server and provides APIs for networking, files, processes, and other server-side operations.

Q5. What is npm?

npm is the package manager commonly used with Node.js for installing and managing packages and running project scripts.

Q6. What is package.json?

package.json contains project metadata, scripts, dependencies, and configuration information for a Node.js project.

Q7. What is package-lock.json?

It records the resolved versions and dependency tree used by npm, helping make installations reproducible.

🧠 One mental model to remember

You previously learned:

React
  ↓
HTTP Request
  ↓
Backend

Now you're learning what the backend can be:

React
   ↓
HTTP Request
   ↓
Node.js
   ↓
Express
   ↓
Database
   ↓
JSON Response

But Node.js and Express are not the same thing:

Node.js
   ↓
Runtime

Express
   ↓
Web framework running on Node.js

We'll get to Express after you understand Node fundamentals.

                 Node.js
                    │
             JavaScript code
                    │
                    ▼
              ┌───────────┐
              │Call Stack │
              └─────┬─────┘
                    │
             asynchronous work
                    │
                    ▼
              Node.js runtime
                    │
                    ▼
             Event Loop
                    │
           ┌────────┴────────┐
           ▼                 ▼
     Callback Queue       Promises
           │                 │
           └────────┬────────┘
                    ▼
                Call Stack
                    │
                    ▼
               Your code