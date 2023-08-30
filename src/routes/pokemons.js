const { Router } = require('express');
const getHanlderAllPokemons = require('../handlers/getHandlers/getHandlerAllPokemons');
const getHandlerIdPokemon = require('../handlers/getHandlers/getHandlerIdPokemon');
const deleteHanlderPokemon = require('../handlers/deleteHanlderPokemon');
const updateHandlerPokemon = require('../handlers/updateHandlerPokemon');
const createHandlerPokemon = require('../handlers/createHandlerPokemon');
const validate = require('../middlewares/index');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getHanlderAllPokemons);
pokemonsRouter.get('/:id', getHandlerIdPokemon);
pokemonsRouter.post('/', validate, createHandlerPokemon);
pokemonsRouter.put('/:id', updateHandlerPokemon);
pokemonsRouter.delete('/:id', deleteHanlderPokemon);

module.exports = pokemonsRouter;