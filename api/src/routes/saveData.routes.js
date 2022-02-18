const { Router } = require("express");
const route = Router();
const saveData = require("../controllers/saveSomethign.controller.js");
route.get("/", (req, res) => {
  try {
    console.log(`in backend`);
    res.json({
      url: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1068887150-c94e3f7d-1a8c-454e-81ba-9441ed9e33d0%27'",
    });
  } catch (error) {
    console.log("post/saveData", error);
    return 500;
  }
});

module.exports = route;
