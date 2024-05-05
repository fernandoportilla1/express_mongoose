const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)

mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
