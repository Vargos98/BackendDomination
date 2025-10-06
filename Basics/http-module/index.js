const http = require('http');
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}: new Req received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }

    if (req.url === '/') {
      res.end("Homepage");
    } else if (req.url === '/profile') {
      res.end("Welcome to profile page");
    } else if (req.url === '/user') {
      res.end("Welcome to user page");
    } else {
      res.end("404 - Page Not Found");
    }
  });
});

myServer.listen(3000, () => {
  console.log("server running on port 3000");
});
