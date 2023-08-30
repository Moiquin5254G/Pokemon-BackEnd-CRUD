require('dotenv').config();
const { PORT } = process.env;
const server = require('./src/app');
const { conn } = require('./src/db');

conn.sync({ alter: true }).then(async() => {
    server.listen(PORT, () => {
        console.log('server listening at', PORT);
    });
});