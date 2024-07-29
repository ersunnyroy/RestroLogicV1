require('dotenv').config();
const dbConnect = require('./config/dbCon');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// import routes to use them
const SuperAdminRoutes = require('./routes/SuperAdminRoutes');

// PORT 5000
const PORT = process.env.PORT || 5000;
app.use(express.json());

// connecting to database
dbConnect();

// define routes use them 
app.use('/admin', SuperAdminRoutes);



mongoose.connection.on('open', () => {
    app.listen(PORT, () => console.log(`App is listing on port ${PORT}`));
})

