import express from "express"
import { getAllCourses , createCourse} from "../controllers/courseController.js"
const router=express.Router()

// TODO: get all course without lectures
router.route("/courses").get(getAllCourses)

// TODO: create new course, only admins
router.route("/createcourse").post(createCourse)

// TODO: add lecturs


// TODO: Delete lectures,


// TODO:  get course details

export default router;