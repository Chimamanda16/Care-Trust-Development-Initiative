const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Post = new Schema({
    Body: String,
    filename: String,
    
});

module.exports = mongoose.model("Post", Post);