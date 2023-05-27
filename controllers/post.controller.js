const express = require('express');
const app = express();
const Post = require("../models/post.model");

app.use(express.json());

module.exports.addPost = (req, res) =>{
    
    const {content} = req.body;

    const newPost = new Post({
        Body: content
    });
    newPost.save();
    console.log("saved");
}