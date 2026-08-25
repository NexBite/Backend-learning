# 1. What is Express.js?
Express.js is a web framework for Node.js used to build web servers and REST APIs.
Instead of writing a lot of low-level HTTP handling:
import http from "node:http";
const server = http.createServer((req, res) => {
    if (req.url === "/products" && req.method === "GET") {
        res.end("Products");
    }
});

Express lets us write:
app.get("/products", (req, res) => {
    res.send("Products");
});

Much cleaner.

# 2. Express Architecture

Keep this picture in your mind:

                 Client
                   │
                   │ HTTP Request
                   ▼
             ┌───────────┐
             │  Express  │
             │  Server   │
             └─────┬─────┘
                   │
             Middleware
                   │
                   ▼
                Router
                   │
                   ▼
              Controller
                   │
                   ▼
               Database
                   │
                   ▼
               Response
                   │
                   ▼
                Client

We'll gradually learn every part.

# 3.  current Express app
You have:
import express from "express";
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {
    res.send("Products Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

Let's understand it line by line.
# Line 1
import express from "express";
This imports the Express package.
You installed it using:
npm install express
# Line 2
const app = express();
This creates an Express application.
Think:
express()
   ↓
Express application
   ↓
app
The app object gives us methods such as:
app.get()
app.post()
app.put()
app.patch()
app.delete()
app.use()
app.listen()

# 4. app.listen()
 wrote:
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
This starts your server.
PORT = 5000
       ↓
Server listens
       ↓
localhost:5000
Browser:
http://localhost:5000
connects to your Express server.
# 5. Express Routes
This is one of the most important concepts.
You wrote:
app.get("/", (req, res) => {
    res.send("Home Page");
});
Break it down:
app.get()
   │
   ├── HTTP method → GET
   │
   ├── Path → /
   │
   └── Handler → (req, res) => {...}
So:
GET /
 ↓
Home Page
6. Another route
app.get("/products", (req, res) => {
    res.send("Products Page");
});
means:
GET /products
       ↓
Products Page
And:
app.get("/users", (req, res) => {
    res.send("Users Page");
});
means:
GET /users
       ↓
Users Page
# 7. req and res
This is extremely important.
(req, res) => {
req
Means:
Request
It contains information coming from the client.
For example:
req.method
req.url
req.headers
req.params
req.query
req.body
We'll learn each one.
res

Means:

Response

It is used to send something back to the client.
For example:
res.send()
res.json()
res.status()
# 8. Practical experiment
Modify your /products route:
app.get("/products", (req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.send("Products Page");
});

Restart your server:
node app.js
Open:
http://localhost:5000/products
Your terminal should show:
Method: GET
URL: /products
This proves:
Browser
   │
   │ GET /products
   ▼
Express
   │
   ├── req.method → GET
   └── req.url → /products
# 9.  Practice — Create more routes
Now don't copy my original routes.
You create these yourself:
GET /about
GET /contact
GET /orders
GET /categories
For example, /about should return:
About Page
/contact:
Contact Page
/orders:
Orders Page
/categories:
Categories Page
Your server should then have 7 routes:
GET /
GET /products
GET /users
GET /about
GET /contact
GET /orders
GET /categories
# -----------------------Interview Questions----------------
# Q1. What is Express.js?
Answer:
Express.js is a lightweight web framework for Node.js used to build web applications and REST APIs.
# Q2. What is express()?
Answer:
express() creates an Express application instance.
Example:
const app = express();
# Q3. What is a route?
Answer:
A route defines how an application responds to a specific HTTP method and URL path.
Example:
app.get("/users", (req, res) => {
    res.send("Users");
});
# Q4. What are req and res?
Answer:
req represents the incoming HTTP request and res represents the HTTP response sent back to the client.
# Q5. What does app.get() do?
Answer:
app.get() defines a route handler for HTTP GET requests.
# Q6. What does res.send() do?
Answer:
res.send() sends a response to the client.
Example:
res.send("Hello");
🧪 Today's Practice #1
Create these routes yourself:
GET /
GET /products
GET /users
GET /about
GET /contact
GET /orders
GET /categories
# =================== Express HTTP Methods ==============
| Method   | Purpose                 | Example              |
| -------- | ----------------------- | -------------------- |
| `GET`    | Read data               | Get products         |
| `POST`   | Create data             | Add product          |
| `PUT`    | Replace entire resource | Replace product      |
| `PATCH`  | Partially update        | Change product price |
| `DELETE` | Delete data             | Delete product       |

Think:

GET     → Give me data
POST    → Create something
PUT     → Replace it
PATCH   → Change part of it
DELETE  → Remove it
# 1. GET → Read

app.get("/products", (req, res) => {
    res.send("Get all products");
});
Request:
GET /products
Response:
Get all products
Example
# Imagine we have:
const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Keyboard", price: 1500 }
];

We could return them:

app.get("/products", (req, res) => {
    res.json(products);
});

Now the response is JSON:

[
    {
        "id": 1,
        "name": "Laptop",
        "price": 60000
    },
    {
        "id": 2,
        "name": "Keyboard",
        "price": 1500
    }
]
# 2. POST → Create

POST is used when the client wants the server to create a new resource.

Example:

app.post("/products", (req, res) => {
    res.send("Product created");
});
Request:
POST /products
Conceptually:
Client
  │
  │ POST /products
  │
  │ { name: "Mouse", price: 800 }
  ▼
Express
  │
  ▼
Create product
Unlike GET, POST normally carries data in the request body.
For example:
{
    "name": "Mouse",
    "price": 800
}
# 3. express.json()
This is very important.
To read JSON request bodies, add:
app.use(express.json());
Example:
import express from "express";
const app = express();
app.use(express.json());
app.post("/products", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Product received",
        product: req.body
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

# Now if the client sends:
{
    "name": "Keyboard",
    "price": 1500
}
you can access it using:
req.body
#  Important distinction
# Remember the three things from Phase 1:
URL
 ├── Route parameter
 ├── Query parameter
 └── Request body
Example:
POST /products/25?notify=true
Body:

{
    "name": "Keyboard",
    "price": 1500
}
Then:
req.params
    ↓
{ id: "25" }

req.query
    ↓
{ notify: "true" }

req.body
    ↓
{ name: "Keyboard", price: 1500 }



# 4. PUT → Replace

PUT generally means:

Replace the existing resource with the supplied representation.

Example:

app.put("/products/:id", (req, res) => {
    res.json({
        message: `Product ${req.params.id} replaced`,
        product: req.body
    });
});

Request:

PUT /products/25

Body:

{
    "name": "Gaming Keyboard",
    "price": 2500
}

Conceptually:

Old product:
{
    id: 25,
    name: "Keyboard",
    price: 1500
}

        ↓ PUT

New product:
{
    id: 25,
    name: "Gaming Keyboard",
    price: 2500
}

PUT generally represents the whole resource.

# 5. PATCH → Partial update

PATCH is used when you want to modify only part of a resource.

Suppose:

{
    "id": 25,
    "name": "Keyboard",
    "price": 1500,
    "brand": "Logitech"
}

You only want to change the price.

Request:

PATCH /products/25

Body:

{
    "price": 1800
}

Express:

app.patch("/products/:id", (req, res) => {
    res.json({
        message: `Product ${req.params.id} updated`,
        changes: req.body
    });
});

Only the supplied fields need to change.

# 6. DELETE → Delete

Example:

app.delete("/products/:id", (req, res) => {
    res.json({
        message: `Product ${req.params.id} deleted`
    });
});

Request:

DELETE /products/25

Response:

{
    "message": "Product 25 deleted"
}
#  Complete REST API picture

Now combine everything:

# GET
/products
        ↓
Get all products


# GET
/products/25
        ↓
Get product 25


# POST
/products
        ↓
Create product


# PUT
/products/25
        ↓
Replace product 25


# PATCH
/products/25
        ↓
Update part of product 25

# DELETE
/products/25
        ↓
Delete product 25
This is the structure you'll see constantly in real backend development.

# ================================= Interview Questions ================================
# 1. GET vs POST?
GET retrieves data.
POST creates a new resource.
# #2. PUT vs PATCH?
PUT generally replaces the complete resource.
PATCH partially modifies a resource.
# 3. What is req.body?
It contains data sent by the client in the HTTP request body, assuming appropriate body-parsing middleware is configured.
# 4. What is req.params?
It contains values captured from route parameters.
Example:
/products/25
Route:
app.get("/products/:id", ...)
Then:
req.params.id
is:
"25"
# 5. Why use express.json()?
It parses incoming JSON request bodies so they can be accessed through:
req.body
# 6. What does res.status(201) mean?
HTTP 201 Created indicates that a request successfully resulted in creation of a resource.
Remember this interview answer

If interviewer asks:

What is the difference between PUT and PATCH?

Say:

PUT is generally used to replace the complete resource, while PATCH is used to partially update a resource.

Example:

PUT
{
    name,
    price
}

versus:

PATCH
{
    price
}

That's a strong interview answer.

# Q1. What is CRUD?
CRUD stands for Create, Read, Update, and Delete—the four standard operations you perform on persistent data in almost every database or API.

# Q2. What does req.params.id contain?
It contains the route parameter passed in the URL. In a route defined as /products/:id, if a user navigates to /products/5, req.params.id holds the string value "5".

# Q3. Why do we use app.use(express.json());?
It is built-in middleware in Express that parses incoming request bodies containing JSON data. Without it, req.body will be undefined when clients send data in POST, PUT, or PATCH requests.

# Q4. What is the difference between res.send() and res.json()?

res.send() is a general-purpose method that accepts various response types (strings, HTML, Buffers, Objects). Express automatically sets the Content-Type header based on what you pass to it.

res.json() explicitly converts non-null objects or arrays into JSON using JSON.stringify() and sets the Content-Type header specifically to application/json.

# Q5. Why should a missing product return 404 instead of 200?
HTTP status codes tell the client the outcome of their request. 200 (OK) indicates the request succeeded and the resource was found, whereas 404 (Not Found) explicitly signals that the requested resource does not exist. Returning a 200 for a missing item can confuse frontend apps, APIs, and client libraries into thinking a resource was successfully retrieved.

# Q6. What does res.status(201) represent?
It sets the HTTP response status code to 201 Created, which indicates that the request succeeded and a new resource was created as a result (typically used after a successful POST request).

# Q7. What is the difference between PUT and PATCH?

PUT performs a full replacement of the resource. You must supply all required fields in the request payload to replace the existing object entirely.

PATCH performs a partial update. You only send the fields you want to modify, leaving the remaining properties of the resource intact.