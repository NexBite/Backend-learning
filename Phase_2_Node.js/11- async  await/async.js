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