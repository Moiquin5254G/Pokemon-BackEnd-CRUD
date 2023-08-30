const { Pokemon } = require("../db");

const deletePokemonDb = async (id) => {
  const pokemonToDelete = await Pokemon.findByPk(id);
  const name = pokemonToDelete.name;

  if (pokemonToDelete) {
    await pokemonToDelete.destroy();
    return `The pokemon ${name} has been successfully eliminated`;
  }
  return `The pokemon ${name} does not exist`;
};

module.exports = deletePokemonDb;
