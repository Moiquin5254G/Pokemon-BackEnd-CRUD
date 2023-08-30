const axios = require("axios");
const { Type } = require("../../db");

const getApiTypes = async () => {
  const typesDb = await Type.findAll();
  if (typesDb.length) return typesDb;
  const typesApi = await axios("https://pokeapi.co/api/v2/type");
  const data = Promise.all(
    typesApi.data.results.map(async (element) => {
      let types = await Type.create({
        name: element.name,
      });
      return types;
    })
  );
  data ? data : `couldn´t bring the types`;
};

module.exports = getApiTypes;
