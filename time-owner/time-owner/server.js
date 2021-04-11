const express = require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose.connect("mongodb+srv://dbUser:Seneca123@scheduler.m2qdx.mongodb.net/chocolander?retryWrites=true&w=majority")

//require route
app.use("/", require("./routes/taskRoute"));

app. listen(3001,function(){
    console.log("express server is running on port 3001");
})