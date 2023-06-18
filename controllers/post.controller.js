const express = require('express');
const cheerio = require("cheerio");

const Post = require("../models/post.model");

module.exports.addPost = (req) =>{
    const content = req;
    const $ = cheerio.load(content);
    const toHtml = $.text();
    const newPost = new Post({
        Body: toHtml
    });
    newPost.save();
    console.log("saved");
};
