const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise completed");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});