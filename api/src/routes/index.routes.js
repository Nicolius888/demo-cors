const express = require("express");
const routeHome = require("./home.routes");
const saveData = require("./saveData.routes");
// server = express();
function routes(server) {
  server.use("/home", routeHome);
  server.use("/save", saveData);
}

module.exports = routes; // Update
