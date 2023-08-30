const { Router } = require('express');
const getHandlerAllTypes = require('../handlers/getHandlers/getHandlerAllTypes');

const typesRouter = Router();

typesRouter.get('/', getHandlerAllTypes);

module.exports = typesRouter;