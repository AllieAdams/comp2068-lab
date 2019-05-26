const express = require('express');
const app =  express();

//Import our pages routes
const pageRoutes = require('./routes/pages');

//Register out page pageRoues
app.use('/', pageRoutes);

//Export the changes
module.exports = app;