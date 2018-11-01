/**
 * @jest-environment node
 */

// Testing the api
const axios = require("axios");
const { port } = require("../config");

describe("Fetching Data", () => {
  it("should contain the status and the dataFetched", async () => {
    const expectedProperties = ["status", "dataFetched"];
    const response = await axios({ url: `http://localhost:${port}/fruit` });
    const responseProperties = Object.keys(response.data);
    expect(responseProperties).toEqual(
      expect.arrayContaining(expectedProperties)
    );
  });

  it("should contain a name and favouriteFruit property", async () => {
    const expectedDataProperties = ["name", "favouriteFruit"];
    const response = await axios({ url: `http://localhost:${port}/fruit` });

    // If there is data, the first item of the dataFetched array should:
    // Contain name and favouriteFruit properties
    const responseProperties = Object.keys(response.data.dataFetched[0]);
    expect(responseProperties).toEqual(
      expect.arrayContaining(expectedDataProperties)
    );
  });
});

describe("Inserting Data", () => {
  it("should contain the status and the dataInserted", async () => {
    const expectedProperties = ["status", "dataInserted"];

    const response = await axios({
      url: `http://localhost:${port}/fruit`,
      method: "POST",
      data: { name: "Dan", favouriteFruit: "kiwi" }
    });

    const responseProperties = Object.keys(response.data);
    expect(responseProperties).toEqual(
      expect.arrayContaining(expectedProperties)
    );
  });

  it("should contain name and favouriteFruit that matches my request body", async () => {
    const expectedDataObject = {
      name: "Dan",
      favouriteFruit: "kiwi"
    };

    const response = await axios({
      url: `http://localhost:${port}/fruit`,
      method: "POST",
      data: { name: "Dan", favouriteFruit: "kiwi" }
    });

    const responseDataInserted = response.data.dataInserted;
    expect(responseDataInserted).toEqual(
      expect.objectContaining(expectedDataObject)
    );
  });
});

describe("Removing Data", () => {
  it("should contain the status and the dataRemoved", async () => {
    const expectedProperties = ["status", "dataRemoved"];

    const response = await axios({
      url: `http://localhost:${port}/fruit`,
      method: "DELETE",
      data: { name: "Dan", favouriteFruit: "kiwi" }
    });

    const responseProperties = Object.keys(response.data);
    expect(responseProperties).toEqual(
      expect.arrayContaining(expectedProperties)
    );
  });

  it("should contain name and favouriteFruit that matches my request body", async () => {
    const expectedDataObject = {
      name: "Dan",
      favouriteFruit: "kiwi"
    };

    const response = await axios({
      url: `http://localhost:${port}/fruit`,
      method: "DELETE",
      data: { name: "Dan", favouriteFruit: "kiwi" }
    });

    const responseDataRemoved = response.data.dataRemoved;
    expect(responseDataRemoved).toEqual(
      expect.objectContaining(expectedDataObject)
    );
  });
});
