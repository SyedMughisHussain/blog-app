import express from "express";
import { upload } from "../middlewares/multer.js";

import { signUp, signIn } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signUp);
router.route("/signin").post(signIn);

export default router;
