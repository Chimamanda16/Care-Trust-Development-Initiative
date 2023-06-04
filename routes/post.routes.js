//Get request for the main page
const express = require('express');
const app =  express();
const cheerio = require("cheerio");
const postRouter = express.Router();

const { addPost } = require("../controllers/post.controller");
const { getArticles } = require("../controllers/login.controller");


app.use(express.urlencoded({extended:true}));
app.use(express.json());

postRouter.post('/publish', (req, res) =>{
    getArticles(res);
    const articleBody = req.body.editor;
    addPost(articleBody);
});

module.exports = postRouter;