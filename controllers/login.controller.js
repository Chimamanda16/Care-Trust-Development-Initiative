const express = require('express');
const app = express();
const md5 = require("md5");
const Login = require("../models/login.model");
const getPost = require('./admin.controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function post(res){
    const foundArticles = await getPost();
    res.render("admin", {articles: foundArticles});
}


module.exports.getArticles = post;

module.exports.authenticate = async function(req, res){
        
    const {username, password} = req.body;
    try{
        const response = await Login.findOne({Email: username})
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
