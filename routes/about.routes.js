//Get request for the about page
const express = require('express');

const aboutRouter = express.Router();

aboutRouter.get('/about', (req, res) =>{
    res.render("about");
});

module.exports = aboutRouter;
