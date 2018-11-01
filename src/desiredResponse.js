// Unit test Submit and expect response to have correct keys and structure

const fetchDummyResponse = {
  status: "success!",
  dataFetched: [
    {
      _id: "5bda378a97b25311836364d0",
      name: "Some Name",
      favouriteFruit: "Banana",
      __v: 0
    }
  ]
};

const insertDummyResponse = {
  status: "success!",
  dataInserted: {
    _id: "5bda378a97b25311836364d0",
    name: "Some Name",
    favouriteFruit: "Banana",
    __v: 0
  }
};

const deleteDummyResponse = {
  status: "success!",
  dataRemoved: {
    _id: "5bda378a97b25311836364d0",
    name: "Some Name",
    favouriteFruit: "Banana",
    __v: 0
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