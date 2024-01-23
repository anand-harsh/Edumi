import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/User.js";
import { Course } from "../models/Course.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const file = req.file;
  if (!name || !email || !password)
    return next(new ErrorHandler("Please enter all feilds", 400));

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User already exists", 409));
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "tempid",
      url: "tempurl",
    },
  });
  sendToken(res, user, "User rgistered successfully", 200);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //   const file = req.file;
  if (!email || !password)
    return next(new ErrorHandler("Please enter all feilds", 400));

  let user = await User.findOne({ email }).select("password");
  if (!user) return next(new ErrorHandler("Incorrect password or email", 401));

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return next(new ErrorHandler("Incorrect password or email", 401));

  sendToken(res, user, `Welcome back ${user.name}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});
export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const userProf = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    userProf,
  });
});
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all feilds", 400));
  const user = await User.findById(req.user._id).select("+password");
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) return next(new ErrorHandler("Incorrect Password", 400));
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
  });
});

export const updateProfilePicture = catchAsyncError(async (req, res, next) => {
  //TODO: incomplete

  res.status(200).json({
    success: true,
    message: "Profile picture updated successfully",
  });
});

export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHandler("User not found"));

  const resetToken = user.getResetToken();
  await user.save();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `Click on the link to reset your password. ${url}. If you have not requested then please ignore`;
  await sendEmail(user.email, "Edumi Reset password", message);

  //send token via email
  res.status(200).json({
    success: true,
    message: "Reset token sent to email successfully",
  });
});
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) return next(new ErrorHandler("Token is invalid or expired"));
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

export const addToPlaylist = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.body.id);
  if (!course) return next(new ErrorHandler("Invalid course Id", 404));

  const courseAlreadyExist = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) return true;
  });

  if (courseAlreadyExist)
    return next(new ErrorHandler("Course already in playlist", 400));

  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });

  await user.save();

  res.status(200).json({
    success: true,
    message: "Added To Playlist",
  });
});

export const removeFromPlaylist = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);
  if (!course) return next(new ErrorHandler("Invalid course Id", 404));

  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.playlist = newPlaylist;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});

export const handleDeleteSingleUser = async (req, res) => {
  const id = req.user.id;
  await User.findByIdAndDelete({ _id: id });
  return res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Profile deleted successfully",
    });
};

export const handleAdminDelete = async (req, res) => {
  if (req.user?.role === "admin") {
    const id = req.params.id;
    await User.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } else {
    return res.status(200).json({
      success: false,
      message: "You are not admin",
    });
  }
};

export const handleAdminGetAllUser = async (req, res, next) => {
  if (req.user?.role === "admin") {
    const users = await User.find({ role: "user" });
    if (users.length == 0) {
      return next(new ErrorHandler("User Not Found", 404));
    }
    return res.status(200).json({ users });
  } else {
    return res.status(200).json({
      success: false,
      message: "You are not admin",
    });
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    // Extract Id
    const { id } = req.params;

    // Checking for User Existence
    const isUserExist = await User.findById({ _id: id });

    if (!isUserExist) {
      // Response if User Not Exist
      return next(new ErrorHandler("User Not Found", 400));
    } else if (isUserExist.role === "admin") {
      // Response if User is Already Admin
      return next(new ErrorHandler("User is Already Admin", 400));
    }

    // Response if User Exist
    isUserExist.role = "admin";
    await isUserExist.save();

    return res
      .status(200)
      .json({ success: true, message: "User Role Updated" });
  } catch (error) {
    next(new ErrorHandler("Error updating user role", 400));
  }
};

export const addCourseToUserPlaylist = catchAsyncError (async(req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if(!course){
      return next(new ErrorHandler(`No such Course Exist with id ${req.params.id}`, 400));
    }
    const userId = req.user?._id;
    const user = await User.findById(userId);
    const list = user.playlist;
    let alreadyPresent = false;
    list.forEach((obj1)=>{
      if(!alreadyPresent&&obj1.course._id == courseId){
        alreadyPresent = true
      }
    })
    if(alreadyPresent){
      return next(new ErrorHandler(`Course already Present in the Playlist`, 200));
    }
    else{
      // Push the new playlist item
      user.playlist.push({
      course: courseId,
      // poster: 'path/to/poster.jpg', // Replace with the actual poster path
      });
    
      // Save the updated user document
      await user.save();
      res.status(200).json({ message: 'Course added to the playlist successfully' });
    }
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});