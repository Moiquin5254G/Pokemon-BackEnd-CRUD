const getNamePokemons = require("../../controllers/getController/getNamePokemons");
const getAllPokemons = require("../../controllers/getController/getAllPokemons");

const getAllPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const results = name ? await getNamePokemons(name) : await getAllPokemons();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = getAllPokemonsHandler;
