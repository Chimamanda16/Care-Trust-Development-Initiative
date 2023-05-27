//Get request for the login page
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.set("view engine", "ejs");

const {authenticate} = require("../controllers/login.controllers");

const loginRouter = express.Router();

loginRouter.get('/login', (req, res) =>{
    res.render("login");
});

// loginRouter.post("/login", authenticate);
loginRouter.post("/login", (req, res) =>{
    if(req.body.name = "publish"){
        res.render("post");
    }
    else{
        authenticate;
    }
});


module.exports = loginRouter;