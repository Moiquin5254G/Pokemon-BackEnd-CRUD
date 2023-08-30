const cleanArrayDb = require('../utils/cleanArrayDb');
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const searchNameDb = async (name) => {
  const dbName = await Pokemon.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const result = await cleanArrayDb(dbName);
  return result;
};

module.exports = searchNameDb;