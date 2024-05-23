//Get request for the main page
const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) =>{
    res.render("index");
});

module.exports = homeRouter;