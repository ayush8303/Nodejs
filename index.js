const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>Hello bro kya haal hai</h1>");
    resp.end();
  })
  .listen(4500);
