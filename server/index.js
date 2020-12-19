const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var user = require("../controller/userController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.listen(1000, () => {
  console.log("Server started at 1000 port");
});
app.use("/user", user);
