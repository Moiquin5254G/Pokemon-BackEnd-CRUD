const axios = require("axios");
const cleanArrayApi = require("./cleanArrayApi");

const searchNameApi = async (name) => {
  try {
    const data = await axios(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    const result = data.data;
    const searchName = name.toLowerCase();

    result === searchName
      ? await cleanArrayApi([result])
      : `The user with the name: '${name}' does not exist. Try with another please.`;

    return await cleanArrayApi([result]);
  } catch (error) {
    return error.message;
  }
};

module.exports = searchNameApi;
