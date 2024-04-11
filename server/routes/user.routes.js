import express from "express";
import { verifyJWT } from "../middlewares/verifyJwt.js";
import { upload } from "../middlewares/multer.js";

import {
  signUp,
  signIn,
  getUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signUp);
router.route("/signin").post(signIn);
router.route("/getProfile").get(verifyJWT, getUserProfile);

export default router;
