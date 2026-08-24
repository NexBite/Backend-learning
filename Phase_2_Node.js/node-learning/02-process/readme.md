Interview Questions
Q1. What is process in Node.js?

Answer:

process is a global Node.js object that provides information and control over the currently running Node.js process.

Q2. What does process.version return?

It returns the Node.js version currently running.

Example:

console.log(process.version);
Q3. What does process.platform return?

It identifies the operating-system platform on which Node.js is running.

For Windows:

win32
Q4. What does process.cwd() mean?

It returns the current working directory from which the Node.js process is running.

🧪 Practice challenge

Don't copy the answer yet.

Create:

02-process/app.js

and print:

Node version
Platform
Current directory
Process ID

Hint: Node's process object has a property for the process ID.

Try to find/remember it from the concept.

Your output should look roughly like:

# ============= Node version: process.version — Returns the current Node.js version string (e.g., 'v20.11.0').  Platform: process.platform — Returns the operating system platform (e.g., 'darwin', 'win32', or 'linux').  Current directory: process.cwd() — A method returning the current working directory of the process.  Process ID: process.pid — Returns the Numerical Process ID (PID) assigned to the running process.  

# --- Interview Questions

Q: What is process.env?

process.env is an object containing environment variables available to the running Node.js process.

Q: Why use environment variables?

To keep configuration and sensitive values outside the source code and make applications configurable across environments such as development, testing, and production.

For example:

Development → development database
Testing     → test database
Production  → production database

without changing the application code.

⚠️ Important for your project

Eventually you'll use a .env file:

.env

with values such as:

PORT=5000
DB_URL=...
JWT_SECRET=...

and access them with:

process.env.PORT
process.env.DB_URL
process.env.JWT_SECRET

But don't create .env yet. First understand process.env using the CMD exercise above.

Your task now

Run:

set MY_NAME=Kamalesh

then:

node -e "console.log(process.env.MY_NAME)"

Interview questions
1. What is an environment variable?

A configuration value supplied to a process through its environment rather than hard-coded into the application.

2. What is process.env?

An object containing environment variables available to the current Node.js process.

3. Why use .env?

To conveniently manage local configuration and keep sensitive configuration out of source code.

4. Should .env be committed to Git?

Normally, no.

Instead:

.env
5. Should node_modules be committed?

Normally, no.

node_modules/