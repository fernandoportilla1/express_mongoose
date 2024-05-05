const express = require('express');
const cors = require('cors');

const app = express();

// Config App Express
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api', require('./routes/api'));

module.exports = app;