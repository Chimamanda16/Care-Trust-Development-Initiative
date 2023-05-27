//Get request for the main page
const express = require('express');

const postRouter = express.Router();

postRouter.get('/', (req, res) =>{
    res.render("post");
});

module.exports = postRouter;