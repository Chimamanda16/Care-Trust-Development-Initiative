//Get request for the main page
const express = require('express');
const app =  express();
const postRouter = express.Router();

const { addPost } = require("../controllers/post.controller");
const { getArticles } = require("../controllers/login.controller");
const { getArticle } = require("../controllers/login.controller");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

postRouter.post('/publish', (req, res) =>{
    const articleBody = req.body.editor;
    console.log(articleBody);
    // addPost(articleBody);
    // getArticles(res);
});

postRouter.get("/article", (req, res)=>{
    const article = req.query.getArticle;
    getArticle(article, res);
});

module.exports = postRouter;