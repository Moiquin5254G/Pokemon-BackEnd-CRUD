const cleanArrayApi = require("../../utils/cleanArrayApi");
const cleanArrayDb = require("../../utils/cleanArrayDb");
const searchId = require("../../utils/searchId");
const { Pokemon, Type } = require("../../db");

const getIdPokemon = async (id, source) => {
  try {
    const pokemonRaw =
      source === "api"
        ? await searchId(id)
        : await Pokemon.findByPk(id, {
            include: {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] },
            },
          });

    if (source === "api") {
      if (pokemonRaw.length < 1)
        throw new Error(`Couldn't find pokemon in the api`);
      return cleanArrayApi([pokemonRaw]);
    }

    if (pokemonRaw === null)
      throw new Error(`The pokemon does not exist in the database`);
    return cleanArrayDb([pokemonRaw]);
  } catch (error) {
    return error.message;
  }
};

module.exports = getIdPokemon;
