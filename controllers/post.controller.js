const express = require('express');
const cheerio = require("cheerio");
const fs = require("fs");
const mongo = require("mongodb").MongoClient;
const Post = require("../models/articles.model");

const app = express();

module.exports.addPost = (req) =>{
    // Change the contents of the article to plain text
    const content = req;
    const $ = cheerio.load(content);
    const toHtml = $.text();
    const FileId = "ID" + (new Date()).getTime();
    var newPost = new Post({
        Body: toHtml,
        FileId: FileId
    });
    newPost.save()
    .then(function(){
        console.log("saved");
    })
    .catch(function(err){
        console.log(err);
    });
};
