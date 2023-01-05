const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  if (url === "/home") {
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/about") {
    res.write("<body><h1>Welcome to About us page</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/node") {
    res.write("<body><h1>Welcome to my node-js </h1></body>");
    res.write("</html>");
    res.end();
  }
});
server.listen(3000);
