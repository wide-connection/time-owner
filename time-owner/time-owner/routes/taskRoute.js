const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

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

module.exports = router;