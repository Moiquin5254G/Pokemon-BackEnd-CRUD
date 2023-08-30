const getApiTypes = require("../../controllers/getController/getApiTypes");

const getHandlerAllTypes = async (res) => {
  try {
    const result = await getApiTypes();
    result
      ? res.status(200).json(result)
      : res.status(404).json(`There aren´t types`);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = getHandlerAllTypes;
