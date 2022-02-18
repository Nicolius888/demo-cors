const { Router } = require("express");
const route = Router();
const getData = require("../controllers/getSomething.controller.js");
route.get("/", async (req, res) => {
  const { data } = req.body;
  try {
    const someGet = getData(data);
    console.log(`${someGet} required in backend`);
    res.send(someGet);
  } catch (error) {
    console.log("post/getData", error);
    return 500;
  }
});
module.exports = route;
