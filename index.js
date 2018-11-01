// Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // <----- Require body-parser

// Mongoose
const mongoose = require("mongoose");
const { nameOfYourDB, port } = require("./config");

const mongoDB = `mongodb://127.0.0.1/${nameOfYourDB}`;
mongoose.connect(mongoDB);

// Importing our routes functions
const {
  getFromDatabase,
  addToDatabase,
  deleteFromDatabase
} = require("./src/routes");

app.use(bodyParser.json()); // <----- Use body-parser for json

// Schema for our fruit model
const FruitSchema = new mongoose.Schema({
  name: String,
  favouriteFruit: String
});
const FavouriteFruit = mongoose.model("fruit", FruitSchema);

// Routing with express.
app.get("/fruit", getFromDatabase);
app.post("/fruit", addToDatabase);
app.delete("/fruit", deleteFromDatabase);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
