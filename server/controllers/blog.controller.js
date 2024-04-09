import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Blog from "../models/blog.model.js";

const createBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError("Please provide title and description.", 400);
  }

  const blog = await Blog.create({
    title,
    description,
  });

  return res.status(200).json({
    success: true,
    data: {
      blog,
    },
  });
});

export { createBlog };
