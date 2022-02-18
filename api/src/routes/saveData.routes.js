const { Router } = require("express");
const route = Router();
const saveData = require("../controllers/saveSomethign.controller.js");
route.post("/", (req, res) => {
  try {
    const { data } = req.body;
    if (data) {
      saveData(data);
      console.log(`${data} saved in backend`);
      res.send(`${data} saved in backend`);
    }
  } catch (error) {
    showErrors("post/saveData", error);
    return 500;
  }
});

module.exports = route;
