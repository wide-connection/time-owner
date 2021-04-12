const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const User = require("../models/userModel");

router.route("/addTask").post((req, res) => {
    const title= req.body.title;
    const Category = req.body.Category;
    const newTask = new Task({
        title,
        Category
    });

    newTask.save();
})

router.route("/taskList").get((req, res) => {
    Task.find()
        .then(foundTask => res.json(foundTask))
})

router.route("/register").post((req, res) => {

    const userName= req.body.userName;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        userName,
        password,
        email
    });

    newUser.save();
})

module.exports = router;