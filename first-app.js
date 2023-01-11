const http = require("http");
const express = require("express"); //express package returns a ffunction
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type='submit'>Add product</button></form>"
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
});
// const server = http.createServer(app);
// server.listen(3000);------------------------>These line can be converted to app.listen(3000)
app.listen(3002);
