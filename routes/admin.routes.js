//Get request for the about page
const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/admin', (req, res) =>{
    const aboutArticle = require("../controllers/login.controller");
    if(aboutArticle.foundArticles){
        res.render("admin", {articles: aboutArticle.foundArticles});
    }else{
        res.send("Please go back to login page!");
    }
});

module.exports = adminRouter;
