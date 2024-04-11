import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Blog from "../models/blog.model.js";
import { request } from "express";

const getLoginUserBlogs = asyncHandler(async (req, res) => {
console.log(req.user._id);
  const blogs = await Blog.find({authorId: req.user._id}) 

  return res.status(200).json({
    success: true,
    message: "Blogs fetched successfully",
    blogs,
  });
});

const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  return res.status(200).json({
    success: true,
    results: blogs.length,
    message: "Blogs fetched successfully",
    blogs,
  });
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  console.log(req.user);

  if (!title || !description ) {
    throw new ApiError("Please provide title and description.", 400);
  }

  const blog = await Blog.create({
    title,
    description,
    userAvatarUrl: req.user.avatar,
    authorId: req.user._id,
  });

  return res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog,
  });
});

const updateBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
    },
    {
      new: true,
    }
  );

  return res.status(200).json({
    success: true,
    message: "Blog updated successfully",
    blog,
  });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    blog,
  });
});

export { getAllBlogs, createBlog, updateBlog, deleteBlog, getLoginUserBlogs };
