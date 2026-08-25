async function main() {
    try {
        const data = JSON.parse("invalid json");

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();