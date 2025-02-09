let courses = require("../data/courses");
let getAllCourses = (req, res) => {
  res.json(courses);
};
const getCourse = (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  if (!course)
    return res.status(404).send("The course with the given ID was not found");
  res.status(200).json(course);
};
const createCourse = (req, res) => {
  console.log(req.body);
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).send("All fields are required.");
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    description,
    price,
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};
const updateCourse = (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);
  if (!course)
    return res.status(404).send("The course with the given ID was not found");
  const index = courses.indexOf(course);
  courses[index] = { ...course, ...req.body };
  res.status(200).json(course);
};
const deleteCourse = (req, res) => {
  const courseId = parseInt(req.params.id);
  const courseIndex = courses.findIndex((c) => c.id === courseId);
  if (courseIndex === -1) {
    return res.status(404).send("The course with the given ID was not found.");
  }
  courses.splice(courseIndex, 1);
  res.status(200).send(`Course with ID ${courseId} deleted successfully.`);
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
