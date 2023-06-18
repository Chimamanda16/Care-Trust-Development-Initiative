const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Images = new Schema({
    Filename: String,
    ImgId: String,
    ImgUrl: String
});

module.exports = mongoose.model("Images", Images);