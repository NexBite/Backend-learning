3. ❌ Error Handling

Now the final topic.

Synchronous JavaScript errors can be handled using:

try {
    // risky code
} catch (error) {
    // handle error
}

Example:

try {
    const result = 10 / 0;

    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}

But division by zero in JavaScript doesn't throw an error, so let's use a real example:

try {
    const data = JSON.parse("invalid json");

    console.log(data);
} catch (error) {
    console.log("Something went wrong");
    console.log(error.message);
}