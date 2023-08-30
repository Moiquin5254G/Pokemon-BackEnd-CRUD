const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const cleanArrayDb = require("../../utils/cleanArrayDb");
const cleanArrayApi = require("../../utils/cleanArrayApi");

const getAllPokemons = async () => {
  const dataBasePokemon = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const infoPokemons = [];

  for (let i = 1; i < 21; i++) {
    infoPokemons.push(
      (await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)).data
    );
  }

  const apiPokemons = cleanArrayApi(infoPokemons);
  const dbPokemons = cleanArrayDb(dataBasePokemon);
  const infoTotal = [...dbPokemons, ...apiPokemons];
  infoTotal ? infoTotal : `Couldn´t bring the pokemon`;
};

module.exports = getAllPokemons;
