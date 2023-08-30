const createPokemonDb = require("../controllers/createPokemonDb");

const createHandlerPokemon = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } =
    req.body;

  try {
    const creation = await createPokemonDb(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    return res.status(200).json(creation);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = createHandlerPokemon;
