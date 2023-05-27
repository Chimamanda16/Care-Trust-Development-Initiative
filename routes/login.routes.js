//Get request for the login page
const express = require('express');
const app = express();
const loginRouter = express.Router();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

const { authenticate } = require("../controllers/login.controllers");


loginRouter.get('/login', (req, res) =>{
    res.render("login");
});

// loginRouter.post("/login", authenticate);
loginRouter.post("/login", (req, res) =>{
    if(req.body.btn === "publish"){
        res.render("post");
    }
    else{
        authenticate(req, res);
    }
});


module.exports = loginRouter;