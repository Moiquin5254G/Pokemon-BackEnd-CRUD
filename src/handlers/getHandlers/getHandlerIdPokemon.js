const getIdPokemon = require("../../controllers/getController/getIdPokemon");

const getHandlerIdPokemon = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";

  try {
    const result = await getIdPokemon(id, source);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = getHandlerIdPokemon;
