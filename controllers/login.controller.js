const express = require('express');
const app = express();
const md5 = require("md5");
const Images = require("../models/imgs.model");
const Login = require("../models/login.model");
const Post = require("../models/articles.model");
const getPost = require('./admin.controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function post(res){
    const foundArticles = await getPost();
    const Images = await getPost();
    foundArticles.forEach(article =>{
        let content = article.Body;
        const keyword = "Image saved here ";
        const keywordLength = keyword.length;

        let currentIndex = 0;
        let occurrences = [];

        while (currentIndex !== -1) {
            currentIndex = content.indexOf(keyword, currentIndex);

            if (currentIndex !== -1) {
                const startIndex = currentIndex + keywordLength;
                const endIndex = content.indexOf(" ", startIndex);

                const extractedValue = content.substring(startIndex, endIndex !== -1 ? endIndex : undefined);

                occurrences.push(extractedValue);
                currentIndex = endIndex !== -1 ? endIndex : currentIndex + keywordLength;
            }
        }

        occurrences.forEach(occurrence =>{
            Images.findOne({ImgId: occurrence})
            .then(response =>{
                let imgUrl = response.ImgUrl;
                let imageTag = "<img src=" + imgUrl + ">";
                occurrence.replace(imageTag);
            })
            .catch(err =>{
                console.log(err);
            })
        });

    });
    res.render("admin", {articles: foundArticles});
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
