//Get request for the login page
const express = require('express');
const {authenticate} = require("../controllers/login.controllers");

const loginRouter = express.Router();

loginRouter.get('/login', (req, res) =>{
    res.render("login");
});

loginRouter.post("/login", authenticate);

module.exports = loginRouter;