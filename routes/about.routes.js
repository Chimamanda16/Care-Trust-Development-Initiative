//Get request for the about page
const express = require('express');
const { getArticle } = require("../controllers/login.controller");
const aboutRouter = express.Router();

aboutRouter.get('/about', (req, res) =>{
    let article = require("./post.routes");
    console.log("article: " + article.title);
    if(!article.title){
        const aboutTitle = "About Title"
        const aboutArticle = "Not yet provided! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem unde atque molestias ratione cum corporis voluptates, maxime quos blanditiis perspiciatis commodi placeat quidem laudantium tenetur modi ab dolor yeah nam ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem unde atque molestias ratione cum corporis voluptates, maxime quos blanditiis perspiciatis commodi placeat quidem laudantium tenetur modi ab dolor nam ipsum!Lorem ipsum dolor ehen, sit amet consectetur adipisicing elit. Rem unde atque molestias ratione cum corporis voluptates, maxime quos blanditiis perspiciatis commodi placeat quidem laudantium tenetur modi ab dolor nam ipsum!"
        res.render("about", {article: aboutArticle, title: aboutTitle});    
    }
    else{
        getArticle(title, res);
    }
    
});

module.exports = aboutRouter;