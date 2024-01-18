import express from "express"
import { getAllCourses , createCourse,addLectureToCourse} from "../controllers/courseController.js"
import { isAdminAuthenticated } from "../middlewares/adminAuth.js";
import { isAuthenticated } from "../middlewares/Auth.js";
const router=express.Router()

// TODO: get all course without lectures
router.route("/courses").get(getAllCourses)

// TODO: create new course, only admins
router.route("/createcourse").post(isAdminAuthenticated,createCourse)

// TODO: add lecturs, only Admins
router.post("/course/:id", isAuthenticated, isAdminAuthenticated, addLectureToCourse);

// TODO: Delete lectures,


// TODO:  get course details

export default router;