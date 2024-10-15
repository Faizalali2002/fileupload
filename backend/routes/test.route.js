import express from "express";
import { handleTestController } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/", handleTestController);

export default router;
