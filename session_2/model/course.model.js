const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
