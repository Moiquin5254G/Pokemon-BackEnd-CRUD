const { Pokemon } = require("../db");

const createPokemonDb = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const namePokemon = name;
  const exists = await Pokemon.findOne({
    where: { name: namePokemon },
  });

  if (exists)
    throw new Error(`The pokemon with name: ${namePokemon} already exists`);

  if (types.length > 2) throw new Error("A Pokemon can have at most 2 types");

  const newPokemon = {
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  };
  if (newPokemon) {
    const pokemonCreate = await Pokemon.create(newPokemon);
    const total = await pokemonCreate.addTypes(types);
    total
      ? `The pokemon ${name} has been created successfully`
      : `The pokemon ${name} has not been created`;
  }
};

module.exports = createPokemonDb;
