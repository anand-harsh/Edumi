import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
  addToPlaylist,
  removeFromPlaylist,
  handleDeleteSingleUser,
  handleAdminDelete,
  handleAdminGetAllUser,
  updateUserRole,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router
  .route("/updateprofilepicture")
  .get(isAuthenticated, updateProfilePicture);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);
router.route("/me").delete(isAuthenticated, handleDeleteSingleUser);
router.route("/admin/users/:id").delete(isAuthenticated, handleAdminDelete);
router.route("/admin/users").get(isAuthenticated, handleAdminGetAllUser);
router.route("/admin/users/:id").put(isAuthenticated, updateUserRole);

export default router;
