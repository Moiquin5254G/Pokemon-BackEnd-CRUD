const axios = require('axios');

const searchId = async (id) => {
    try {
        const data = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        return data;
    } catch (error) {
        return error.message;
    }
};

module.exports = searchId;