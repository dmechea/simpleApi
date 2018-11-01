// Express
const express = require("express");
const app = express();

const { port } = require("./config");

// Importing our routes functions
const {
  getFromDatabase,
  addToDatabase,
  deleteFromDatabase
} = require("./src/routes");

// Routing with express.
app.get("/fruit", getFromDatabase);
app.post("/fruit", addToDatabase);
app.delete("/fruit", deleteFromDatabase);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
