//Get request for the main page
const express = require('express');
const app =  express();
const postRouter = express.Router();

const { addPost } = require("../controllers/post.controller");
const { getArticles } = require("../controllers/login.controller");
const { getArticle } = require("../controllers/login.controller");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

postRouter.get("/article", (req, res)=>{
    const article = req.query.getArticle;
    getArticle(article, res);
});

postRouter.post("/newPost", (req, res) =>{
    res.render("post");
});

postRouter.post('/publish', (req, res) =>{
    const articleTitle = req.body.title;
    const articleBody = req.body.editor;
    addPost(articleBody, articleTitle);
    getArticles(res);
});

module.exports = postRouter;