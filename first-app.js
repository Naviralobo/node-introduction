const http = require("http");
const express = require("express"); //express package returns a ffunction
const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
app.use((req, res, next) => {
  //   console.log("second middleware");
  res.send("<h1>hello from express</h1>");
  res.send({ name: "navi" });
});
// const server = http.createServer(app);
// server.listen(3000);------------------------>These line can be converted to app.listen(3000)
app.listen(3000);
