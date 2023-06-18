const express = require('express');
const cheerio = require("cheerio");
const fs = require("fs");
const mongo = require("mongodb").MongoClient;
const Binary = require("mongodb").Binary;
const Images = require("../models/imgs.model");
const Post = require("../models/articles.model");

const app = express();

module.exports.addPost = (req) =>{
    // Change the contents of the article to plain text
    const content = req;
    const $ = cheerio.load(content);
    const toHtml = $.text();
    const FileId = "ID" + (new Date()).getTime();
    const newPost = new Post({
        Body: toHtml,
        FileId: FileId
    });
    // Get the images and save in Binary form
    const imgTags = $("img");
    imgTags.each((index, element) =>{
        const src = $(element).attr("src");
        const imgId = "ID" + (new Date()).getTime();
        imgTags.replaceWith("Image saved here");
        let newImgs = new Images({
            Filename: FileId,
            ImgId: imgId,
            ImgUrl: src
        });
        newImgs.save();
        newPost.save();
    });
    console.log("saved");
};
