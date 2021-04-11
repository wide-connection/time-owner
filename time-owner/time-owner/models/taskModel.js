const mongoose = require("mongoose");

const taskSchema = {
    title:String,
    Category:String
}

const Task = mongoose.model("TaskTable",taskSchema);

module.exports = Task;