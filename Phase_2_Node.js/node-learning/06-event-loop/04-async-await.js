function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function main() {
    const data = await getData();

    console.log(data);
}

main();