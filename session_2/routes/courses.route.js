const express = require("express");
const coursesController = require("../controller/courses.controller");

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/uploads", express.static("uploads"));
router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getCourse);
router.patch("/addcourse", coursesController.createCourse);
router.put("/:id", coursesController.updateCourse);
router.delete("/:id", coursesController.deleteCourse);

module.exports = router;
