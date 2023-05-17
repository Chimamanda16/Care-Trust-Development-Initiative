// Login model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Login = new Schema({
    Email: {
        type: String,
    },
    Password: {
        type: String,
    }
});

module.exports = mongoose.model("Login", Login);