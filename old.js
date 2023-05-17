const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");


mongoose.connect(process.env.mongo).then((res) =>{
    app.listen(3000, () =>{
        console.log("Server has started on port 3000");
    });
}).catch((err) =>{
    console.log(err);
});

const postSchema = new mongoose.Schema({
    Title: String,
    Body: String
});
const PostModel = mongoose.model("Post", postSchema);


//Get request for the main page
app.get("/", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.route("/login")
.get((req,res) =>{
    res.render("login");
})
.post((req, res) =>{
    const userName = req.body.username;
    const passKey = req.body.password;
    if(userName === process.env.adminName && passKey === process.env.adminPass){
        res.redirect("/admin");
    }
    else{
        alert("Wrong Username/password!");
    }
});

app.route("/admin")
.get((req, res) =>{
    PostModel.find({}).then((foundArticles) =>{
        // const Item = new PostModel({
        //     Title: "Post One",
        //     Body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // });
        // Item.save();
        res.render("admin", {articles: foundArticles});
    });
})
.post((req, res) =>{
    if (req.body.view) {

        res.send("<h1>Working??</h1>");
    }
});

app.post("/posts", (req, res) =>{
    PostModel.find({Title: req.body.title}).then((response) =>{
        console.log(response);
        res.render("post", {post: response});
    });
});