//Get request for the about page
const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/admin', (req, res) =>{
    const aboutArticle = require("../controllers/login.controller");
    res.render("admin", {articles: aboutArticle.foundArticles});
});

module.exports = adminRouter;
