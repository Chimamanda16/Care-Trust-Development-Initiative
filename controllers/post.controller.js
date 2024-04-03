const express = require('express');
const fs = require("fs");
const mongo = require("mongodb").MongoClient;
const Post = require("../models/articles.model");

const app = express();

module.exports.addPost = (body, title) =>{
    // Change the contents of the article to plain text
    const content = body;
    const FileId = "ID" + (new Date()).getTime();
    var newPost = new Post({
        Title: title,
        Body: body,
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
