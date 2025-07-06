const express = require("express");
const coursesController = require("../controller/courses.controller");

const router = express.Router();//create router
router.use(express.json());//for json
router.use(express.urlencoded({ extended: true }));//for form
router.use("/uploads", express.static("uploads"));//for images
router.get("/", coursesController.getAllCourses);//readAll
router.get("/:id", coursesController.getCourse);//read
router.patch("/addcourse", coursesController.createCourse);//create
router.put("/:id", coursesController.updateCourse);//update
router.delete("/:id", coursesController.deleteCourse);//delete

module.exports = router;
