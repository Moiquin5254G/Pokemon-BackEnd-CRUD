const updatePokemonDb = require("../controllers/updatePokemonDb");

const updateHandlerPokemon = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedPokemon = await updatePokemonDb(id, updatedData);

    res.status(200).json({
      message: "The pokemon has been updated",
      data: updatedPokemon,
    });
  } catch (error) {
    if (error.message === "No elements to update")
      return res.status(400).json({ error: "No elements to update" });

    return res.status(500).json({ error: "Couldn't update the pokemon" });
  }
};

module.exports = updateHandlerPokemon;
