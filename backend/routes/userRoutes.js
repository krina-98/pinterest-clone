import express from "express";
import {
  registerUser,
  loginUser,
  myProfile,
  userProfile,
  followandUnfollowUser,
  logOutUser,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuth, logOutUser);
router.get("/me", isAuth, myProfile);
router.get("/:id", isAuth, userProfile); // Assuming you want to get user profile by ID
router.post("/follow/:id", isAuth, followandUnfollowUser);

export default router;
