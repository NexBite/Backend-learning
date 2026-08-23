# Full-Stack Learning & Practice Roadmap

> **Goal:** Become job-ready as a Full-Stack Developer by building strong fundamentals, practicing daily, and completing one industry-style full-stack project.

---

## 🎯 Final Goal

```text
JavaScript
   ↓
TypeScript
   ↓
React
   ↓
Backend Fundamentals
   ↓
Node.js
   ↓
Express.js
   ↓
REST API
   ↓
PostgreSQL + SQL
   ↓
Prisma ORM
   ↓
Authentication & Authorization
   ↓
Next.js
   ↓
Testing
   ↓
Docker
   ↓
Deployment
   ↓
Complete Full-Stack Project
   ↓
Interview Preparation
```

---

# 📚 Phase 0 — Existing Foundation

## JavaScript

- [x] Variables
- [x] Data types
- [x] Operators
- [x] Conditions
- [x] Loops
- [x] Functions
- [x] Arrays
- [x] Objects
- [x] Array methods
- [x] Object methods
- [x] DOM basics
- [x] Events
- [x] ES6+
- [x] Destructuring
- [x] Spread / Rest
- [x] Modules
- [x] Promises
- [x] async / await
- [x] Basic advanced JavaScript
- [x] Scope
- [x] Hoisting
- [x] `this`
- [x] Prototypes

## React

- [x] Components
- [x] JSX
- [x] Props
- [x] State
- [x] `useState`
- [x] `useEffect`
- [x] Forms
- [x] Events
- [x] Lists
- [x] Conditional rendering
- [x] Component communication
- [x] React Router basics
- [x] Local storage
- [x] CRUD Todo practice

## TypeScript

- [x] Basic types
- [x] Arrays
- [x] Objects
- [x] Functions
- [x] Interfaces
- [x] Type aliases
- [x] Union types
- [x] Basic generics
- [x] React + TypeScript basics

---

# ===================== Phase 1 — Web & HTTP Fundamentals ======================

## Topics

- [ 1] Client vs Server
- [2 ] Browser architecture basics
- [ 3] HTTP
- [ 4] HTTPS
- [ 5] Request
- [ 6] Response
- [ 7] HTTP methods
- [ 8] GET
- [ 9] POST
- [10 ] PUT
- [11 ] PATCH
- [12 ] DELETE
- [13 ] HTTP status codes
- [ 14] Headers
- [ 15] Request body
- [16 ] URL parameters
- [17 ] Query parameters
- [ 18] JSON
- [19 ] REST API
- [20 ] CORS
- [ 21] Cookies
- [ 22] Sessions
- [ 23] Authentication
- [24 ] Authorization

## Practice

- [ ] Understand a complete HTTP request
- [ ] Understand a complete HTTP response
- [ ] Test APIs using Postman/Bruno
- [ ] Identify status codes from real APIs

## Interview Questions

- [ ] What is HTTP?
- [ ] GET vs POST?
- [ ] PUT vs PATCH?
- [ ] What is REST?
- [ ] What is JSON?
- [ ] What are HTTP status codes?
- [ ] What is CORS?
- [ ] Authentication vs authorization?

---

# ========================== Phase 2 — Node.js=====================

## Setup

```bash
node --version
npm --version
```

## Topics

- [ ] What is Node.js?
- [ ] Node.js runtime
- [ ] V8 engine
- [ ] npm
- [ ] package.json
- [ ] package-lock.json
- [ ] Modules
- [ ] ES Modules
- [ ] CommonJS
- [ ] `import`
- [ ] `export`
- [ ] `process`
- [ ] Environment variables
- [ ] `fs`
- [ ] `path`
- [ ] HTTP module
- [ ] Event loop
- [ ] Call stack
- [ ] Callback queue
- [ ] Promises
- [ ] async / await
- [ ] Error handling

## Practice Projects

- [ ] Hello Node server
- [ ] File reader
- [ ] File writer
- [ ] Basic HTTP server
- [ ] Environment variable practice
- [ ] Small CLI application

## Interview Questions

- [ ] What is Node.js?
- [ ] Is Node.js single-threaded?
- [ ] What is the event loop?
- [ ] What is npm?
- [ ] CommonJS vs ES Modules?
- [ ] What is `process.env`?
- [ ] What are streams?
- [ ] Why is Node.js good for APIs?

---

# ============================== Phase 3 — Express.js===================

## Setup

```bash
npm init -y
npm install express
npm install -D nodemon
```

## Topics

- [ ] Express setup
- [ ] Server
- [ ] Routes
- [ ] Request
- [ ] Response
- [ ] Middleware
- [ ] Route parameters
- [ ] Query parameters
- [ ] Request body
- [ ] JSON middleware
- [ ] Router
- [ ] Controllers
- [ ] Services
- [ ] Error middleware
- [ ] 404 handling
- [ ] Validation
- [ ] CORS
- [ ] Environment variables

## CRUD API

Build:

```text
GET     /api/products
GET     /api/products/:id
POST    /api/products
PUT     /api/products/:id
PATCH   /api/products/:id
DELETE  /api/products/:id
```

## Practice Project

### Product Management API

Features:

- [ ] Create product
- [ ] Get all products
- [ ] Get single product
- [ ] Update product
- [ ] Delete product
- [ ] Search
- [ ] Filtering
- [ ] Sorting
- [ ] Pagination
- [ ] Validation
- [ ] Error handling

---

# =============================== Phase 4 — SQL & PostgreSQL ================

## PostgreSQL Setup

- [ ] Install PostgreSQL
- [ ] Install pgAdmin
- [ ] Create database
- [ ] Create user
- [ ] Connect application to PostgreSQL

## SQL

- [ ] Database
- [ ] Table
- [ ] Row
- [ ] Column
- [ ] Primary key
- [ ] Foreign key
- [ ] Constraints
- [ ] `CREATE`
- [ ] `INSERT`
- [ ] `SELECT`
- [ ] `UPDATE`
- [ ] `DELETE`
- [ ] `WHERE`
- [ ] `ORDER BY`
- [ ] `GROUP BY`
- [ ] `HAVING`
- [ ] `LIMIT`
- [ ] `OFFSET`
- [ ] Aggregate functions
- [ ] INNER JOIN
- [ ] LEFT JOIN
- [ ] RIGHT JOIN
- [ ] Subqueries
- [ ] Indexes
- [ ] Transactions
- [ ] Normalization

## SQL Practice

- [ ] Create users table
- [ ] Create products table
- [ ] Create categories table
- [ ] Create orders table
- [ ] Create order_items table
- [ ] Practice relationships
- [ ] Write 30+ SQL queries

---

# ==================================  Phase 5 — Prisma ORM =================

## Setup

```bash
npm install prisma @prisma/client
npx prisma init
```

## Topics

- [ ] Prisma schema
- [ ] Models
- [ ] Fields
- [ ] Primary keys
- [ ] Relations
- [ ] Migrations
- [ ] Prisma Client
- [ ] CRUD
- [ ] Filtering
- [ ] Sorting
- [ ] Pagination
- [ ] Relations queries
- [ ] Transactions
- [ ] Seed data

## Practice

- [ ] Connect Prisma to PostgreSQL
- [ ] Create models
- [ ] Run migration
- [ ] Create records
- [ ] Read records
- [ ] Update records
- [ ] Delete records
- [ ] Query relations

---

# ============================ Phase 6 — Authentication & Authorization =============

## Authentication

- [ ] Registration
- [ ] Login
- [ ] Logout
- [ ] Password hashing
- [ ] Password comparison
- [ ] Sessions
- [ ] Cookies
- [ ] JWT concepts
- [ ] Protected routes

## Authorization

- [ ] Roles
- [ ] Permissions
- [ ] Admin
- [ ] Customer
- [ ] Role-based access control

Example:

```text
ADMIN
 ├── Create product
 ├── Update product
 ├── Delete product
 └── Manage orders

CUSTOMER
 ├── View products
 ├── Add to cart
 ├── Create order
 └── View own orders
```

## Security

- [ ] Password hashing
- [ ] Input validation
- [ ] Environment variables
- [ ] Secure cookies
- [ ] CORS
- [ ] Rate limiting concepts
- [ ] SQL injection awareness
- [ ] XSS awareness
- [ ] CSRF awareness

---

# ==================================== Phase 7 — Next.js ================

## Setup

```bash
npx create-next-app@latest
```

Recommended:

```text
TypeScript      → Yes
ESLint          → Yes
Tailwind CSS    → Yes
App Router      → Yes
src/ directory  → Yes
```

## Core Topics

- [ ] Next.js architecture
- [ ] App Router
- [ ] Pages
- [ ] Layouts
- [ ] Nested routes
- [ ] Dynamic routes
- [ ] Route groups
- [ ] Loading UI
- [ ] Error UI
- [ ] Not found
- [ ] Metadata
- [ ] Images
- [ ] Fonts
- [ ] Static assets

## Server / Client

- [ ] Server Components
- [ ] Client Components
- [ ] `"use client"`
- [ ] Props
- [ ] State
- [ ] Events
- [ ] Data fetching

## Backend in Next.js

- [ ] Route Handlers
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] Request/Response
- [ ] Server-side database access
- [ ] Server Actions
- [ ] Validation
- [ ] Authentication

## Advanced

- [ ] Caching
- [ ] Revalidation
- [ ] Loading states
- [ ] Error boundaries
- [ ] Middleware/proxy concepts
- [ ] Performance
- [ ] SEO
- [ ] Deployment

---

# ==============================  Phase 8 — Testing ================

## Backend

- [ ] Unit testing
- [ ] Integration testing
- [ ] API testing
- [ ] Validation testing
- [ ] Authentication testing

## Frontend

- [ ] Component testing
- [ ] Form testing
- [ ] User interaction testing

## Practice

- [ ] Test product API
- [ ] Test login
- [ ] Test registration
- [ ] Test protected route
- [ ] Test order creation

---

# =============================== Phase 9 — Docker =============

## Topics

- [ ] What is Docker?
- [ ] Image
- [ ] Container
- [ ] Dockerfile
- [ ] Docker Compose
- [ ] Environment variables
- [ ] Volumes
- [ ] Networks

## Practice

- [ ] Dockerize backend
- [ ] Run PostgreSQL using Docker
- [ ] Connect backend to PostgreSQL
- [ ] Dockerize full application

---

# ================================  Phase 10 — Deployment ===============

## Topics

- [ ] Production build
- [ ] Environment variables
- [ ] Database migrations
- [ ] Production database
- [ ] Frontend deployment
- [ ] Backend deployment
- [ ] Domain
- [ ] HTTPS
- [ ] Logs
- [ ] Monitoring basics

## Final Checklist

- [ ] Application builds successfully
- [ ] Production database connected
- [ ] Environment variables configured
- [ ] Authentication works
- [ ] APIs work
- [ ] Frontend works
- [ ] No secret keys committed
- [ ] README completed

---

# ========================== Phase 11 — Complete Project ================

# Restaurant Ordering & Delivery Platform

## Technology Stack

```text
Frontend
├── Next.js
├── React
├── TypeScript
└── Tailwind CSS

Backend
├── Next.js Route Handlers / Server-side logic
├── REST API concepts
└── Validation

Database
├── PostgreSQL
└── Prisma

Authentication
└── Secure authentication/session system

Tools
├── Git
├── GitHub
├── Postman/Bruno
├── Docker
└── Deployment platform
```

---

# 👤 Customer Features

## Authentication

- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] Profile
- [ ] Protected pages

## Restaurant

- [ ] Restaurant list
- [ ] Restaurant details
- [ ] Categories
- [ ] Food items
- [ ] Search
- [ ] Filtering
- [ ] Sorting

## Cart

- [ ] Add item
- [ ] Remove item
- [ ] Increase quantity
- [ ] Decrease quantity
- [ ] Calculate subtotal
- [ ] Calculate total

## Checkout

- [ ] Address
- [ ] Order summary
- [ ] Payment flow
- [ ] Create order
- [ ] Order confirmation

## Orders

- [ ] Pending
- [ ] Confirmed
- [ ] Preparing
- [ ] Out for delivery
- [ ] Delivered
- [ ] Cancelled
- [ ] Order history

---

# 👨‍💼 Admin Features

- [ ] Admin login
- [ ] Dashboard
- [ ] User management
- [ ] Restaurant management
- [ ] Category management
- [ ] Product management
- [ ] Order management
- [ ] Payment overview
- [ ] Reports
- [ ] Role-based permissions

---

# 🗃️ Final Database Design

Initial models:

```text
User
Restaurant
Category
Product
Cart
CartItem
Order
OrderItem
Address
Payment
Review
```

Relationships:

```text
User
 ├── Cart
 ├── Orders
 ├── Addresses
 └── Reviews

Restaurant
 ├── Categories
 └── Products

Product
 ├── Category
 ├── CartItems
 ├── OrderItems
 └── Reviews

Order
 ├── User
 ├── Address
 ├── OrderItems
 └── Payment
```

---

# 🔌 Final API Plan

```text
/api/auth/register
/api/auth/login
/api/auth/logout

/api/users
/api/users/:id

/api/restaurants
/api/restaurants/:id

/api/categories
/api/categories/:id

/api/products
/api/products/:id

/api/cart
/api/cart/items
/api/cart/items/:id

/api/orders
/api/orders/:id

/api/payments

/api/reviews
```

---

# 📁 Final Project Structure

```text
restaurant-ordering-platform/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── dashboard/
│   │   ├── restaurants/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   └── orders/
│   │   │
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── navbar/
│   │   ├── product/
│   │   ├── cart/
│   │   └── order/
│   │
│   ├── lib/
│   │   ├── db.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── services/
│   ├── hooks/
│   ├── types/
│   └── validations/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

> Build this structure gradually. Do not create empty folders just to match the diagram.

---

# 🧠 Daily Practice System

For every topic follow this process:

```text
1. Learn the concept
       ↓
2. Understand a small example
       ↓
3. Write the code yourself
       ↓
4. Break the code intentionally
       ↓
5. Debug it
       ↓
6. Complete practice questions
       ↓
7. Complete mini task
       ↓
8. Commit to GitHub
       ↓
9. Explain the concept without notes
```

---

# 📝 Daily Learning Record

Copy this template for every practice day:

```text
## Day __ — YYYY-MM-DD

### Topic
-

### Concepts Learned
- 
- 
- 

### Code Practiced
- 
- 

### Problems Faced
- 

### How I Fixed Them
- 

### Interview Questions
1.
2.
3.

### Practice Task
- 

### Git Commit
-

### What I Can Explain Without Notes
- 
```

---

# 🔥 Coding Rules

## Rule 1 — Don't Copy-Paste Blindly

Before running code, understand:

- What does this line do?
- Why is it needed?
- What happens if I remove it?
- What data enters?
- What data comes out?

## Rule 2 — Debug Yourself First

When you get an error:

```text
Read error
   ↓
Find file
   ↓
Find line
   ↓
Understand error
   ↓
Try solution
   ↓
Then ask for help
```

## Rule 3 — Build Small Things

Don't jump directly to the final project.

Build:

```text
Small API
   ↓
CRUD API
   ↓
Database API
   ↓
Auth API
   ↓
Next.js application
   ↓
Final project
```

---

# 🔀 GitHub Practice

Use meaningful commits.

Examples:

```bash
git add .
git commit -m "feat: create product api"
git push
```

Good commit messages:

```text
feat: add product CRUD
feat: connect PostgreSQL
feat: add prisma schema
feat: implement authentication
fix: handle invalid product id
fix: validate product input
test: add product api tests
docs: update api documentation
refactor: separate product service
```

Avoid:

```text
update
test
changes
final
final2
new code
```

---

# 🎤 Interview Preparation

For every completed module:

- [ ] Write 10 interview questions
- [ ] Answer without notes
- [ ] Explain concepts verbally
- [ ] Solve coding questions
- [ ] Explain your project architecture
- [ ] Explain your database design
- [ ] Explain your API design
- [ ] Explain authentication flow
- [ ] Explain important technical decisions

---

# 🏆 Final Job-Ready Checklist

## JavaScript

- [ ] Can explain fundamentals
- [ ] Can solve basic coding problems
- [ ] Understand async JavaScript
- [ ] Understand event loop

## TypeScript

- [ ] Can type React components
- [ ] Can create interfaces/types
- [ ] Understand generics
- [ ] Understand type narrowing

## React

- [ ] Can build components
- [ ] Can manage state
- [ ] Can handle forms
- [ ] Can fetch APIs
- [ ] Can use routing
- [ ] Can debug React applications

## Backend

- [ ] Can create REST APIs
- [ ] Can implement CRUD
- [ ] Can validate input
- [ ] Can handle errors
- [ ] Can implement authentication
- [ ] Can protect routes

## Database

- [ ] Can design tables
- [ ] Can write SQL
- [ ] Can use JOINs
- [ ] Understand relationships
- [ ] Can use PostgreSQL
- [ ] Can use Prisma

## Next.js

- [ ] Understand App Router
- [ ] Understand Server Components
- [ ] Understand Client Components
- [ ] Can create API routes
- [ ] Can connect database
- [ ] Can implement authentication
- [ ] Can build production UI

## Deployment

- [ ] GitHub
- [ ] Environment variables
- [ ] Production database
- [ ] Docker basics
- [ ] Production deployment

---

# 🚦 Current Starting Point

## NEXT LESSON

### Backend Day 1 — HTTP & REST API

Start with:

```text
Client
Server
HTTP
Request
Response
Methods
Status Codes
Headers
Body
Params
Query Params
JSON
REST
```

Then build:

```text
Your First Node.js HTTP Server
```

After that:

```text
Node.js
→ Express
→ REST API
→ PostgreSQL
→ Prisma
→ Authentication
→ Next.js
→ Complete Project
```

---

# ⭐ Golden Rule

> **Don't measure progress by how many tutorials you watched. Measure progress by what you can build without copying.**

Every completed topic should produce:

```text
Knowledge
   +
Code
   +
Practice
   +
Git Commit
   +
Interview Answer
```

That is the workflow to follow throughout this roadmap.
