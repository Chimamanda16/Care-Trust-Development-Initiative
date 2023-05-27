//Get request for the main page
const express = require('express');
const postRouter = express.Router();
const {addPost} = require("../controllers/post.controller");

postRouter.post('/post', () =>{
    addPost;
    res.render("post");
});

module.exports = postRouter;