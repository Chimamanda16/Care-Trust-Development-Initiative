const express = require('express');
const app = express();
const md5 = require("md5");
const Login = require("../models/login.model");
const getPost = require('./admin.controllers');

app.use(express.json());

module.exports.authenticate = (req, res) =>{
    
    const {username, password} = req.body;
    Login.findOne({Email: username}).then((response) =>{
        if(response.Password === md5(password)){
            getPost().then((foundArticles) =>{
                res.render("admin", {articles: foundArticles});
                console.log(foundArticles);
            });
        }
        else{
            alert("Incorrect Email/password");
            res.redirect("login");
        }
    });



    // console.log(req.body);
    // const {username, password} = req.body;
    // const login = new Login({
    //     Email: username,
    //     Password: md5(password)
    // });
    // login.save().then((response) =>{
    //     console.log(response);
    // }).catch((err) =>{
    //     console.log(err);
    // });

}
