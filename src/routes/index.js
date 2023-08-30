const { Router } = require('express');
const pokemonsRouter = require('./pokemons');
const typesRouter = require('./types');

const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;