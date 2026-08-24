fs — File System

Node.js can work with files and folders using the built-in:

node:fs

Unlike dotenv, you don't install anything.

We'll learn:

fs
├── create file
├── write file
├── read file
├── append file
├── rename file
└── delete file
First exercise

Create:

03-fs/
└── app.js

Inside app.js:

import fs from "node:fs";

fs.writeFileSync("message.txt", "Hello from Node.js");

console.log("File created!");

Run:

node app.js

Expected:

File created!

Then look inside 03-fs.

You should now have:

03-fs/
│
├── app.js
└── message.txt

Open message.txt. It should contain:

Hello from Node.js
🧠 What just happened?
fs.writeFileSync(...)

means:

Write data to a file synchronously.

And:

import fs from "node:fs";

loads Node's built-in File System module.

No:

npm install fs

is required.

Your task

Create 03-fs/app.js, run it, and confirm that message.txt was created.

Then we'll learn readFileSync(), and you'll read the file back into your Node program.

File created!

Excellent! ✅ fs.writeFileSync() worked.

You just created a real file from Node.js:

03-fs/
├── app.js
└── message.txt

with:

Hello from Node.js

Now let's do the next operation.

📖 Practice 2 — Read a file

Update app.js:

import fs from "node:fs";

fs.writeFileSync("message.txt", "Hello from Node.js");

const data = fs.readFileSync("message.txt", "utf-8");

console.log("File content:", data);

Run:

node app.js

Expected:

File content: Hello from Node.js
🧠 Understand it

We have two operations:

Write
fs.writeFileSync("message.txt", "Hello from Node.js");
Node.js
   ↓
message.txt
   ↓
Hello from Node.js
Read
fs.readFileSync("message.txt", "utf-8");
message.txt
   ↓
Node.js
   ↓
data
Why "utf-8"?

A file contains bytes. "utf-8" tells Node to decode those bytes as text.

Without it:

const data = fs.readFileSync("message.txt");

you'll get a Buffer rather than a normal string.

🎯 Interview Question

What is the fs module in Node.js?

Answer:

The fs (File System) module is a built-in Node.js module that provides APIs for working with files and directories.

And:

What does writeFileSync() do?

It writes data to a file synchronously, meaning the operation blocks the JavaScript thread until it completes.

We'll later compare this with the asynchronous version:

fs.writeFile()

That will connect directly to our Event Loop / asynchronous Node.js topics.

Your task now

Run the updated code and send me: