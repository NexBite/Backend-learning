import http from "node:http";

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    if (req.url === "/") {
        res.end("Welcome to Node.js Server");
    } 
    else if (req.url === "/products") {
        res.end("Products page");
    } 
    else if (req.url === "/users") {
        res.end("Users page");
    } 
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});