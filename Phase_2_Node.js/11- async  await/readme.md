11. 🚀 async / await

Promises become much easier to read with async and await.

Example:

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function main() {
    const result = await getData();

    console.log(result);
}

main();

Output:

Data received
What does async mean?
async function main() {
}

An async function always returns a Promise.

What does await mean?
const result = await getData();

It waits for the Promise's result within the async function's flow without blocking the Node.js event loop.

This distinction is very important.