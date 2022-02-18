const axios = require("axios");

async function getData(frontData) {
  const data = frontData;
  console.log(data.data);
  return data;
}

module.exports = getData;
