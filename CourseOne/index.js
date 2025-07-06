const express = require("express");
const mongoose = require("mongoose");
const app = express();
const coursesRouter = require("./session_2/routes/courses.route");

app.use("/courses", coursesRouter);
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/lab2db")
  .then(() => {
    console.log("connected to MongoDB");
    //listen on specific port
    app.listen(3001, () => console.log("app started on port 3001"));
  })
  .catch((error) => {
    console.log("cant connect to mongodb" + error);
  });
