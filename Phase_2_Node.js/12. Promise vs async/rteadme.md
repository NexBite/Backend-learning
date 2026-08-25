Promise style
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
async/await style
async function main() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

Both use Promises.

async/await is essentially a cleaner syntax for working with Promise-based asynchronous code.