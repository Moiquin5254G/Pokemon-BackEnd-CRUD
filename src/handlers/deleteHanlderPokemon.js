const deletePokemonDb = require("../controllers/deletePokemonDb");

const deleteHanlderPokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePokemon = await deletePokemonDb(id);
    deletePokemon
      ? res.status(200).json(deletePokemon)
      : res.status(404).json({ error: `The pokemon doesn´t exist` });
  } catch (error) {
    return res.status(404).json({ error: `Couldn't delete the pokemon` });
  }
};

module.exports = deleteHanlderPokemon;
