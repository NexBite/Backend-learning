Interview Questions
1. What is the Call Stack?

A data structure used by JavaScript to keep track of currently executing function calls.

2. What is the Event Loop?

The Event Loop coordinates asynchronous operations and allows callbacks and other queued work to be processed when the JavaScript call stack is available.

3. What is a Promise?

A Promise represents the eventual success or failure of an asynchronous operation.

4. What are the states of a Promise?
Pending
Fulfilled
Rejected
5. What does async do?

It declares an asynchronous function that returns a Promise.

6. What does await do?

It pauses execution of the surrounding async function until the awaited Promise settles, without blocking the Node.js event loop.

7. Difference between setTimeout(fn, 0) and immediately calling fn()?
fn();

executes the function immediately as part of current synchronous execution.

setTimeout(fn, 0);

schedules the callback for later processing.