const http = require('http');
const app = require('./src/app');

// Config .env
require('dotenv').config();

// Config DB
require('./src/config/db')

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT)

server.on('listening', () => {
    console.log(`Server lintening port ${PORT}`)
})
