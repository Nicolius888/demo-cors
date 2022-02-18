const server = require("./src/server");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Start server

const main = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`==>> Server is running on PORT: ${PORT} `);
    });
  } catch (err) {
    console.log("error", err);
  }
};

main();
