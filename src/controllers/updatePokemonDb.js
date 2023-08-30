const { Pokemon } = require("../db");

const updatePokemonDb = async (id, updatedData) => {
  const pokemonToUpdate = await Pokemon.findByPk(id);

  if (pokemonToUpdate) {
    const hasChanges = Object.keys(updatedData).some((key) => {
      return updatedData[key] !== pokemonToUpdate[key];
    });

    if (!hasChanges) throw new Error("No elements to update");

    const updatedPokemon = await pokemonToUpdate.update(updatedData);
    updatedPokemon
      ? updatedPokemon.toJSON()
      : `You haven´t put any value to update`;
  }

  throw new Error("The searched pokemon does not exist");
};

module.exports = updatePokemonDb;
