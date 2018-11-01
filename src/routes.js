const fetchDummyResponse = {
  status: "success!",
  dataFetched: [
    {
      name: "Dan",
      favouriteFruit: "kiwi"
    }
  ]
};

const insertDummyResponse = {
  status: "success!",
  dataInserted: {
    name: "Dan",
    favouriteFruit: "kiwi"
  }
};

const deleteDummyResponse = {
  status: "success!",
  dataRemoved: {
    name: "Dan",
    favouriteFruit: "kiwi"
  }
};

const getFromDatabase = (req, res) => {
  res.send(fetchDummyResponse);
};

const addToDatabase = (req, res) => {
  res.send(insertDummyResponse);
};

const deleteFromDatabase = (req, res) => {
  res.send(deleteDummyResponse);
};

module.exports = {
  getFromDatabase,
  addToDatabase,
  deleteFromDatabase
};
