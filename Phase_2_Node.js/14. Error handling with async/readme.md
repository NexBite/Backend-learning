# 14. Error handling with async/await

This is extremely important for backend development.

async function main() {
    try {
        const data = await getData();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

main();

Flow:

async function
      ↓
await Promise
      ↓
Success ─────→ continue
      │
      ↓
Failure
      ↓
catch