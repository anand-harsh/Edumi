import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
// import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  // if (!title || !description || !category || !createdBy)
    // return next(new ErrorHandler("Please fill all the feilds", 400));
  const { title, description, category, createdBy } = req.body;
  const file = req.file;
  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully. You can add lectures later",
  });
});
