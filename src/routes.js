const mongoose = require("mongoose");

const getFromDatabase = (req, res) => {
  mongoose
    .model("fruit")
    .find(req.query)
    .then(dataFetched => {
      res.send({
        status: "success!",
        dataFetched
      });
    })
    .catch(err => {
      console.log(err);
      res.send("Uh Oh! Error!");
    });
};

const addToDatabase = (req, res) => {
  mongoose
    .model("fruit")
    .create(req.body)
    .then(dataInserted => {
      res.send({
        status: "success!",
        dataInserted
      });
    })
    .catch(err => {
      console.log(err);
      res.send("Uh Oh! Error!");
    });
};

const deleteFromDatabase = (req, res) => {
  mongoose
    .model("fruit")
    .findOneAndDelete(req.body)
    .then(dataRemoved => {
      res.send({
        status: "success!",
        dataRemoved
      });
    })
    .catch(err => {
      console.log(err);
      res.send("Uh Oh! Error!");
    });
};

module.exports = {
  getFromDatabase,
  addToDatabase,
  deleteFromDatabase
};
