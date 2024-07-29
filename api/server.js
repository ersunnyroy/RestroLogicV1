require('dotenv').config();
const dbConnect = require('./config/dbCon');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// PORT 5000
const PORT = process.env.PORT || 5000;
app.use(express.json());

// connecting to database
dbConnect();


mongoose.connection.on('open', () => {
    app.listen(PORT, () => console.log(`App is listing on port ${PORT}`));
})

