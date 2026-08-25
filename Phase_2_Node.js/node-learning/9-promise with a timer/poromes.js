const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Something went wrong");
    }
});