const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Post = new Schema({
    Title: String,
    Body: String
});

module.exports = mongoose.model("Post", Post);