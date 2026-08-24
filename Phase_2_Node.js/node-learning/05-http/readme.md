Step 1 — Create HTTP practice

Create:

node-learning/
└── 05-http/
    └── server.js

Again, make sure its package.json has:

"type": "module"
Step 2 — Create your first HTTP server

Put this in server.js:

import http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js HTTP Server!");
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

Run:

node server.js

You should see:

Server running on http://localhost:5000
Step 3 — Open your browser

Go to:

http://localhost:5000

You should see:

Hello from Node.js HTTP Server!

🎉 You just created a web server using only Node.js.

🧠 Understand what happened
Browser
   │
   │ HTTP Request
   ▼
localhost:5000
   │
   ▼
Node.js HTTP Server
   │
   │ HTTP Response
   ▼
Browser

Your code:

http.createServer(...)

creates the server.

Then:

server.listen(5000)

tells Node:

Listen for incoming HTTP connections on port 5000.

Request and Response

This function:

(req, res) => {

gives us two important objects.

req

Short for:

request

It contains information about what the client requested.

For example:

console.log(req.method);

and:

console.log(req.url);
res

Short for:

response

We use it to send something back to the client.

res.end("Hello!");
🧪 First HTTP practice

Modify your server:

import http from "node:http";

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js!");
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

Run:

node server.js

Open:

http://localhost:5000

Then look at your terminal.

You should see something like:

Server running on http://localhost:5000
Method: GET
URL: /

If you open:

http://localhost:5000/products

you should see:

Method: GET
URL: /products
🎯 Interview Questions
Q1. What is Node's HTTP module?

It is a built-in Node.js module that provides functionality for creating HTTP servers and handling HTTP requests and responses.

Q2. Do you need to install the HTTP module?

No.

import http from "node:http";

It is built into Node.js.

Q3. What is req?

The incoming HTTP request object.

Q4. What is res?

The HTTP response object used to send a response back to the client.

Q5. What does server.listen(5000) do?

It starts the server and makes it listen for connections on port 5000.

🔥 Your practice now

Do these in order:

Practice A — path

Run:

node app.js

inside 04-path.

Get:

Full path: ...
File name: message.txt
Directory: 03-fs
Extension: .txt
Practice B — HTTP

Create 05-http/server.js, run:

node server.js

Then visit:

http://localhost:5000

and:

http://localhost:5000/products

# ----- Next: Make the HTTP Server Practical

Before jumping into Event Loop, let's understand req and res properly.

Update 05-http/server.js:

import http from "node:http";

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    if (req.url === "/") {
        res.end("Welcome to Node.js Server");
    } 
    else if (req.url === "/products") {
        res.end("Products page");
    } 
    else if (req.url === "/users") {
        res.end("Users page");
    } 
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

Run:

node server.js

Then test these URLs in your browser:

http://localhost:5000/

Expected:

Welcome to Node.js Server

Then:

http://localhost:5000/products

Expected:

Products page

Then:

http://localhost:5000/users

Expected:

Users page

And try:

http://localhost:5000/abc

Expected:

Page not found
🧠 What you just built

You're essentially creating a tiny routing system:

GET /
    ↓
Welcome

GET /products
    ↓
Products

GET /users
    ↓
Users

GET /anything-else
    ↓
404

This is the basic idea behind routing in Express.

Later, Express makes this much cleaner:

app.get("/", ...)
app.get("/products", ...)
app.get("/users", ...)
⚠️ One small improvement

Notice this:

res.writeHead(200, {
    "Content-Type": "text/plain"
});

You're initially setting status 200.

But for an unknown route you do:

res.writeHead(404);

For now that's okay for learning, but we'll eventually structure responses more cleanly.