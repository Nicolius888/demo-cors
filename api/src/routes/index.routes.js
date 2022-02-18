const express = require("express");
const routeHome = require("./home.routes");
const saveData = require("./saveData.routes");
const getData = require("./getData.routes");
// server = express();
function routes(server) {
  server.use("/home", routeHome);
  server.use("/save", saveData);
  server.use("/get", getData);
}

module.exports = routes; // Update
