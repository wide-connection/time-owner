const mongoose = require("mongoose");

const userSchema = {
    userName:{
        type: String,
        unique: true
    },
    password: String,
    email: {
        type: String,
        unique: true
    }
};

const User = mongoose.model("UserTable",userSchema);

module.exports = User;