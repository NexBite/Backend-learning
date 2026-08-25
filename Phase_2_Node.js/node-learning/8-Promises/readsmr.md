Promises

Now we move to modern asynchronous JavaScript.

A Promise represents the eventual result of an asynchronous operation.

A Promise can be:

Pending
   ↓
 ┌───────┐
 ▼       ▼
Fulfilled  Rejected

Example:

const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise.then((result) => {
    console.log(result);
});

Output:

Success!