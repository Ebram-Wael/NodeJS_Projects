const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello world!");
});
server.listen(3001, () => console.log("server is running on port 3001"));