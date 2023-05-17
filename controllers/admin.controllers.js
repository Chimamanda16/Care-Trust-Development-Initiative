const express = require("express");
const app = express();

const Post = require("../models/post.model");

function getPost(){
    return Post.find();
}

module.exports = getPost;