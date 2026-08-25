Try this:

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

Run it.

After about 2 seconds:

Data received
resolve()

Means:

The operation succeeded.

reject()

Means:

The operation failed.

Example:

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Something went wrong");
    }
});