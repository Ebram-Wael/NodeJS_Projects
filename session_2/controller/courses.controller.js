const Courses = require("../model/course.model");
const mongoose = require("mongoose");
const getAllCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving courses" });
  }
};
const getCourse = async (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const course = await Courses.findById(courseId);

  if (!course) {
    return res.status(404).send("Course not found");
  }

  res.status(200).json(course);
};
const createCourse = async (req, res) => {
  let { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newCourse = new Courses({ title, description, price });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating course" });
  }
};
const updateCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const updatedCourse = await Courses.findByIdAndUpdate(courseId, req.body, {
      new: true,
    });

    if (!updatedCourse) {
      return res.status(404).send("Course not found");
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating course" });
  }
};
const deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Courses.findByIdAndDelete(courseId);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send("Course deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting course" });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
