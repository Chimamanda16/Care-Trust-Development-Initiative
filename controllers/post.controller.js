const express = require('express');
const app = express();
const post = require("../models/post.model");
const getPost = require('./admin.controllers');

app.use(express.json());

module.exports.authenticate = (req, res) =>{
    
    const {username, password} = req.body;
    Login.findOne({Email: username}).then((response) =>{
        if(response.Password === md5(password)){
            getPost().then((foundArticles) =>{
                res.render("admin", {articles: foundArticles});
            });
        }
        else{
            alert("Incorrect Email/password");
            res.redirect("login");
        }
    });

}