import express from "express";
import {
  getAllCourses,
  createCourse,
  addLectureToCourse,
  getCourseLectures,
  getAllCoursesAvailable,
  sortCourses
} from "../controllers/courseController.js";
import { isAdminAuthenticated } from "../middlewares/adminAuth.js";
import { addCourseToUserPlaylist } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/Auth.js";
const router = express.Router();

// TODO: get all course without lectures
router.route("/courses").get(getAllCourses);

// TODO: create new course, only admins
router.route("/createcourse").post(isAdminAuthenticated, createCourse);

// TODO: add lecturs, only Admins
router.post(
  "/course/:id",
  isAuthenticated,
  isAdminAuthenticated,
  addLectureToCourse
);
// Get lectures of a course
router.get("/course/:id", isAuthenticated, getCourseLectures);

//Post Add courses to user playlist
router.post("/addToPlaylist/:id", isAuthenticated, addCourseToUserPlaylist);

// TODO: Delete lectures,

// TODO:  get course details
router.get("/getAllCourses", isAuthenticated, getAllCoursesAvailable);
router.get("/sortCourses", isAuthenticated, sortCourses);

export default router;
