const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/index.routes");
const port = 3000;

require("dotenv").config();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
    .connect(process.env.mongo)
    .then((res) =>{
        app.listen(3000, () =>{
            console.log("Server has started on port 3000");
        });
    }).catch((err) =>{
        console.log(err);
    });