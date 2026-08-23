🚀 Phase 1 — Web & HTTP Fundamentals
1. Client vs Server

Think of almost every web application as:

Client → Request → Server → Response → Client

Client

The client is the application making the request.

Examples:

Chrome
Firefox
React application
Mobile application
Postman
Server

The server receives requests, processes them, communicates with databases/services, and sends responses.

Example:

React App
   ↓
GET /api/users
   ↓
Node.js + Express Server
   ↓
Database
   ↓
JSON Response
   ↓
React App
Interview Q&A

Q: What is a client?

A client is a software application that sends requests to a server and consumes the server's responses.

Q: What is a server?

A server is a program or system that receives client requests, processes them, and returns responses.

Q: Is a browser a server?

No. A browser is primarily a client.

2. Browser Architecture Basics

You don't need to become a browser-engine developer, but you should understand the basic flow.

When you enter:

https://example.com

roughly:

Browser
   ↓
DNS
   ↓
Find server IP
   ↓
TCP/TLS connection
   ↓
HTTP Request
   ↓
Web Server
   ↓
HTTP Response
   ↓
Browser
   ↓
HTML/CSS/JS
   ↓
Rendered Page

Important browser components/concepts:

UI
Browser engine
Rendering engine
JavaScript engine
Network layer
Storage
Security/sandboxing

For your backend learning, focus particularly on:

Network → HTTP → JavaScript → Cookies/Storage → CORS

3. HTTP

HTTP = HyperText Transfer Protocol

It is the protocol used for communication between clients and servers on the web.

Example:

Client
  |
  | HTTP Request
  ↓
Server
  |
  | HTTP Response
  ↓
Client

HTTP is stateless.

That means each request is generally independent. HTTP itself doesn't automatically remember that a previous request came from the same user.

This becomes important when we learn:

Cookies
Sessions
JWT
Authentication
4. HTTPS

HTTPS = HTTP + TLS encryption

HTTP:

Client → Server

HTTPS:

Client
  ↓
Encrypted communication
  ↓
Server

HTTPS protects data while it travels between client and server.

For example, you don't want:

username=aditya
password=123456

to travel openly across the network.

Interview

Q: Difference between HTTP and HTTPS?

HTTP sends data without TLS encryption, while HTTPS uses TLS to encrypt communication and authenticate the server.

5. HTTP Request

A request is sent by the client to the server.

Example:

GET /api/users HTTP/1.1
Host: example.com
Accept: application/json

A request can contain:

Method
URL
Headers
Body

For example:

POST /api/users
Content-Type: application/json

{
  "name": "Aditya",
  "email": "aditya@example.com"
}
6. HTTP Response

The server responds to the client.

Example:

HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "User created successfully"
}

A response commonly contains:

Status Code
Headers
Body
7. HTTP Methods

These are extremely important for backend interviews.

Method	Common purpose
GET	Read data
POST	Create data
PUT	Replace/update data
PATCH	Partially update data
DELETE	Delete data

Example REST API:

GET     /api/users
POST    /api/users
GET     /api/users/10
PUT     /api/users/10
PATCH   /api/users/10
DELETE  /api/users/10
8. GET

Used to retrieve data.

GET /api/products

Example response:

[
  {
    "id": 1,
    "name": "Laptop",
    "price": 60000
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 1000
  }
]
Important

GET normally should not be used to create or modify resources.

9. POST

Used commonly to create a resource.

POST /api/users

Body:

{
  "name": "Aditya",
  "email": "aditya@example.com"
}

Server:

Validate data
     ↓
Create user
     ↓
Save database
     ↓
Return response
10. PUT

PUT generally means replace the resource with the supplied representation.

Existing:

{
  "name": "Aditya",
  "email": "old@example.com",
  "age": 30
}

PUT:

{
  "name": "Aditya",
  "email": "new@example.com",
  "age": 31
}

Think:

"Here is the new complete version of this resource."

11. PATCH

PATCH is generally used for a partial update.

Existing:

{
  "name": "Aditya",
  "email": "old@example.com",
  "age": 30
}

PATCH:

{
  "age": 31
}

Only the required field changes.

Interview question

PUT vs PATCH?

PUT generally replaces the resource representation, while PATCH applies a partial modification.

12. DELETE

Used to remove a resource.

DELETE /api/users/10

Possible response:

204 No Content
13. HTTP Status Codes

You absolutely need these for backend development.

2xx — Success
200 OK
201 Created
204 No Content
3xx — Redirection
301 Moved Permanently
302 Found
304 Not Modified
4xx — Client Error
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
5xx — Server Error
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
Most important distinction
401 → Authentication problem
403 → Permission problem

Example:

Not logged in → 401
Logged in but not admin → 403
14. Headers

Headers provide additional information about requests and responses.

Example:

Content-Type: application/json
Authorization: Bearer token
Accept: application/json

Common headers:

Content-Type
Accept
Authorization
Cookie
Set-Cookie
Cache-Control
Origin
User-Agent

Example:

POST /api/users

Content-Type: application/json
Authorization: Bearer abc123
15. Request Body

The body contains data sent to the server.

For example:

POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 60000
}

The JSON object is the request body.

In Express, you'll eventually access it with:

req.body
16. URL Parameters

URL parameters identify a particular resource.

Example:

/api/users/25

Here:

25

is a URL/path parameter.

Express:

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
});

Request:

/api/users/25

Result:

25

Use path parameters when you're identifying a specific resource.

17. Query Parameters

Query parameters are generally used for filtering, searching, sorting, pagination, etc.

Example:

/api/products?category=laptop&sort=price

Here:

category=laptop
sort=price

are query parameters.

Express:

app.get("/api/products", (req, res) => {
    console.log(req.query);
});

Potential result:

{
    category: "laptop",
    sort: "price"
}
Difference
/api/users/25
          ↑
       path param

vs

/api/users?page=2&limit=10
            ↑
       query params
18. JSON

JSON = JavaScript Object Notation

It is one of the most common formats for API communication.

Example:

{
  "id": 1,
  "name": "Aditya",
  "skills": ["JavaScript", "React", "Node.js"]
}

JSON supports:

String
Number
Boolean
Array
Object
null

Not JavaScript-specific syntax like:

undefined
function
19. REST API

REST is an architectural style for designing web APIs.

Example:

GET     /api/products
POST    /api/products
GET     /api/products/10
PUT     /api/products/10
PATCH   /api/products/10
DELETE  /api/products/10

A good REST API represents resources.

Instead of:

/getAllProducts
/createProduct
/deleteProduct

prefer:

GET    /products
POST   /products
DELETE /products/10

The HTTP method communicates the operation.

20. CORS

CORS = Cross-Origin Resource Sharing

Suppose:

Frontend:
http://localhost:5173

Backend:
http://localhost:5000

Different origins.

The browser applies same-origin security rules.

The backend can tell the browser which origins are allowed.

Example Express configuration later:

app.use(cors({
    origin: "http://localhost:5173"
}));
Important interview point

CORS is primarily a browser security mechanism.

It doesn't mean that servers cannot communicate with each other.

21. Cookies

A cookie is small data associated with a website/domain and sent by the browser according to cookie rules.

Example:

sessionId=abc123

Server can send:

Set-Cookie: sessionId=abc123

Then the browser can send:

Cookie: sessionId=abc123

Cookies are heavily used for:

Authentication
Sessions
Preferences
Tracking

Important security attributes:

HttpOnly
Secure
SameSite

We'll study these properly during authentication.

22. Sessions

Because HTTP is stateless, applications often need a mechanism to remember users.

Typical session flow:

Login
  ↓
Server verifies credentials
  ↓
Server creates session
  ↓
Session ID stored in cookie
  ↓
Browser sends cookie
  ↓
Server identifies session
  ↓
Server knows the user

Example:

Browser
   |
   | Cookie: sessionId=123
   ↓
Server
   |
   ↓
Session Store
   |
   ↓
User #123
23. Authentication

Authentication answers:

Who are you?

Example:

Email + Password
       ↓
     Login
       ↓
Server verifies
       ↓
Authenticated

Common mechanisms:

Session authentication
JWT
OAuth
OpenID Connect
24. Authorization

Authorization answers:

What are you allowed to do?

Example:

User
 ├── View products       ✅
 ├── Create order        ✅
 └── Delete users        ❌

Admin
 ├── View products       ✅
 ├── Create order        ✅
 └── Delete users        ✅

So remember:

Authentication = Who are you?

Authorization = What can you do?
🔥 Complete Request Flow

This is the most important mental model for Phase 1.

Imagine your React frontend requests:

GET /api/products/10

Flow:

┌─────────────────┐
│     Browser     │
│   React App     │
└────────┬────────┘
         │
         │ GET /api/products/10
         │
         ▼
┌─────────────────┐
│      HTTP       │
│     Request     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Node + Express  │
│     Server      │
└────────┬────────┘
         │
         │ req.params.id
         ▼
┌─────────────────┐
│    Database     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Express     │
│    Response     │
└────────┬────────┘
         │
         │ 200 OK
         │ JSON
         ▼
┌─────────────────┐
│     React       │
│    Frontend     │
└─────────────────┘

This flow will appear repeatedly throughout your Node/Express/Next.js journey.

🎯 Interview Questions You Must Be Able to Answer
Beginner

1. What is HTTP?

A protocol used for communication between clients and servers.

2. What is HTTPS?

HTTP secured using TLS encryption.

3. What is a request?

A message sent by a client to a server.

4. What is a response?

A message returned by the server to the client.

5. GET vs POST?

GET is generally used to retrieve data; POST is commonly used to create/submit data.

6. PUT vs PATCH?

PUT generally replaces a resource; PATCH partially modifies it.

7. What is a status code?

A numeric code indicating the result/status of an HTTP request.

8. What does 404 mean?

The requested resource was not found.

9. 401 vs 403?

401 means authentication is required/failed; 403 means the request is understood but the client lacks permission.

10. What is JSON?

A lightweight text-based data interchange format commonly used by APIs.

Intermediate

11. What are HTTP headers?

Metadata that provides additional information about an HTTP request or response.

12. What is a request body?

Data sent inside the HTTP request, commonly used with POST, PUT, and PATCH.

13. Path parameter vs query parameter?

Path parameters identify resources, while query parameters commonly control filtering, searching, sorting, or pagination.

14. What is REST API?

An API designed around resources and HTTP semantics, commonly using HTTP methods and representations such as JSON.

15. What is CORS?

A browser security mechanism that controls whether a web page can make cross-origin requests to another origin.

16. What is a cookie?

A small piece of data stored/managed by the browser and associated with a website, often used for sessions and authentication.

17. Why do we need sessions?

To maintain user state across otherwise independent HTTP requests.

18. Authentication vs authorization?

Authentication verifies identity; authorization determines permissions.

🧠 Practice — Don't Just Read

Now let's make this practical.

Practice 1 — Identify the HTTP parts

For:

POST /api/products/25?notify=true HTTP/1.1

Content-Type: application/json
Authorization: Bearer abc123

{
  "name": "Keyboard",
  "price": 1500
}

Identify:

HTTP Method:
Path:
Path Parameter:
Query Parameter:
Headers:
Request Body:
Practice 2 — Design an API

Imagine you're building a Restaurant Ordering API.

Design endpoints for:

Get all restaurants
Get one restaurant
Create restaurant
Update restaurant
Partially update restaurant
Delete restaurant

Use:

GET
POST
PUT
PATCH
DELETE
Practice 3 — Status Codes

Choose the appropriate status code:

1. User successfully created
2. Product doesn't exist
3. User isn't logged in
4. User is logged in but isn't an admin
5. Server crashes unexpectedly
6. Request contains invalid data
7. Product successfully deleted with no response body
Practice 4 — Authentication

Explain this flow in your own words:

User
 ↓
POST /login
 ↓
Email + Password
 ↓
Server
 ↓
Verify credentials
 ↓
Create session/token
 ↓
Browser
 ↓
Future request
 ↓
Authentication
 ↓
Authorization
 ↓
Protected resource
🛠️ Phase 1 Mini Project

Before moving to Express, build a HTTP API design exercise.

Project: Restaurant API Design

Resources:

restaurants
menu-items
users
orders

Design:

GET    /api/restaurants
GET    /api/restaurants/:id
POST   /api/restaurants
PUT    /api/restaurants/:id
PATCH  /api/restaurants/:id
DELETE /api/restaurants/:id

Then design:

GET    /api/restaurants/:id/menu-items
POST   /api/restaurants/:id/menu-items

POST   /api/orders
GET    /api/orders/:id
PATCH  /api/orders/:id

Don't write Express code yet.

First master the HTTP design.

✅ Phase 1 Completion Criteria

You are ready for Node.js HTTP fundamentals when you can explain without notes:

Client
Server
HTTP
HTTPS
Request
Response
GET
POST
PUT
PATCH
DELETE
Status codes
Headers
Body
Path parameters
Query parameters
JSON
REST
CORS
Cookies
Sessions
Authentication
Authorization

And, most importantly, you should be able to look at:

POST /api/users/25?sendEmail=true
Content-Type: application/json
Authorization: Bearer xyz

{
  "name": "Aditya"
}

and immediately identify method, path, parameter, query, headers, authorization, and body.