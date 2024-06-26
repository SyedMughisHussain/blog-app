import express from "express";

import {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getLoginUserBlogs,
  getAllBlogsByUserId,
} from "../controllers/blog.controller.js";
import { verifyJWT } from "../middlewares/verifyJwt.js";

const router = express.Router();

// if user is not logged in then
router.route("/").get(getAllBlogs);
router.route("/getAllBlogsByUserId/:id").get(getAllBlogsByUserId);

// if user is logged in then
router.route("/getLoginUserBlogs").get(verifyJWT, getLoginUserBlogs);

router.route("/").post(verifyJWT, createBlog);
router.route("/:id").patch(verifyJWT, updateBlog);
router.route("/:id").delete(verifyJWT, deleteBlog);


export default router;
