// Instantiate Express
const express = require("express");
const app = express();

// Import and use body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Import our config
const { port, dbName } = require("./config");

// Import mongoose and instruct it to connect to our database.
const mongoose = require("mongoose");
const mongoDB = `mongodb://127.0.0.1/${dbName}`;
mongoose.connect(mongoDB);

// Importing our route functions
const {
  getFromDatabase,
  addToDatabase,
  deleteFromDatabase
} = require("./src/routes");

// Define our schema and model
const FruitSchema = new mongoose.Schema({
  name: String,
  favouriteFruit: String
});
const FavouriteFruit = mongoose.model("fruit", FruitSchema);

// Routing with express.
app.get("/fruit", getFromDatabase);
app.post("/fruit", addToDatabase);
app.delete("/fruit", deleteFromDatabase);

// Listening on config.port
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
