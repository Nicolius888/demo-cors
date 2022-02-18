const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  console.log("Home");
  res.send("Home Page");
});

module.exports = route;
