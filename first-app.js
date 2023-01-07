const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    return fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      // res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My First Page</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        "<body><form action='/message' method='post'><input type='text' name='message'/><button type='submit'>send</button></form> </body>"
      );
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //outputs message=typedvalue in input,since message is the name given to input and it outputs as key,value pairs
      const message = parsedBody.split("=")[1]; //therefore take the value by splitting it
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to my node-js </h1></body>");
  res.write("</html>");
  return res.end();
});
server.listen(3001);
