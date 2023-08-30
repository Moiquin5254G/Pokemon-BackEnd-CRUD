const searchNameApi = require("../../utils/searchNameApi");
const searchNameDb = require("../../utils/searchNameDb");

const getNamePokemons = async (name) => {
  try {
    const pokeApi = await searchNameApi(name);
    const pokeDb = await searchNameDb(name);

    if (!pokeApi.length && !pokeDb.length) {
      throw new Error(`The pokemon with name ${name} does not exits`);
    } else {
      const resultsTwo = [...pokeDb];
      if (resultsTwo.length > 0) return resultsTwo;
      const resultsOne = [...pokeApi];
      if (resultsOne.length > 0) return resultsOne;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = getNamePokemons;
