import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Blog from "../models/blog.model.js";

const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.findOne();
  return res.status(200).json({
    success: true,
    results: blogs.length,
    message: "Blogs fetched successfully",
    data: {
      blogs,
    },
  });
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError("Please provide title and description.", 400);
  }

  const blog = await Blog.create({
    title,
    description,
  });

  return res.status(201).json({
    success: true,
    message: "Blog created successfully",
    data: {
      blog,
    },
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
    data: {
      blog,
    },
  });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    data: {
      blog,
    },
  });
});

export { getAllBlogs, createBlog, updateBlog, deleteBlog };
