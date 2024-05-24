//Get request for the about page
const express = require('express');
const { getArticle } = require("../controllers/login.controller");
const articleRouter = express.Router();

articleRouter.get('/article', (req, res) =>{
    let {article} = require("./post.routes"); 
    getArticle(article, res);
    
});

module.exports = articleRouter;