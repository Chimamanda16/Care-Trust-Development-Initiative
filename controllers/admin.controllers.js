const express = require("express");
const app = express();

const Post = require("../models/articles.model");

function getPost(){
    return Post.find();
}

module.exports = getPost;