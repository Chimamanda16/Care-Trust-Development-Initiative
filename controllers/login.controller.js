const express = require('express');
const app = express();
const md5 = require("md5");
const Login = require("../models/login.model");
const Post = require("../models/articles.model");
const getPost = require('./admin.controllers');
var foundArticles;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function post(res){
    foundArticles = await getPost();
    module.exports.foundArticles = foundArticles;
    res.redirect("/admin");
}

async function getArticle(req, res){
    const response = await Post.findOne({Body: req});
    let article = response.Body;
    res.render("about", {article: article});
}

module.exports.getArticle = getArticle;
module.exports.getArticles = post;

module.exports.authenticate = async function(req, res){
        
    const {username, password} = req.body;
    try{
        const response = await Login.findOne({Email: username});
        if(response.Password === md5(password)){
            post(res);
        }
        else{
            res.send("Incorrect Email/password. Please go back to the login page!");
        }        
    }
    catch(error){
        console.error(error);
        res.send("An error occured");
    }

}
