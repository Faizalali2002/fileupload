import express from "express";
import {
  handleLoginController,
  handleSignupController,
} from "../controllers/auth.controller.js";

const router = express.Router();

//SignUp route
router.post("/sign-up", handleSignupController);

//login
router.post("/login", handleLoginController);

export default router;
