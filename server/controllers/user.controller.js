import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const signUp = asyncHandler(async (req, res) => {
  console.log(req.file);
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new ApiError("Do not leave any field.", 400);
  }

  const existedUser = await User.findOne({ email: email });

  if (existedUser) {
    throw new ApiError("User already exists, try with new email.", 400);
  }

  const avatarLacalPath = req.file?.path;

  if (!avatarLacalPath) {
    throw new ApiError("Please provide avatar.", 400);
  }

  const response = await uploadOnCloudinary(avatarLacalPath);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    avatar: response.url,
  });
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      user: user,
    },
  });
});

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError("Do not leave any field.", 400);
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApiError("User not found.", 400);
  }

  const isMatch = user.comparePassword(password);

  if (!isMatch) {
    throw new ApiError("Invalid password.", 400);
  }

  const token = user.generateAuthToken(user._id);

  const options = {
    expiresIn: "1d",
    httpOnly: true,
    secure: true,
  };

  res.cookie("accessToken", token, options).status(200).json({
    success: true,
    message: "User logged in successfully",
    data: {
      user,
    },
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    user: req.user,
  });
});

export { signUp, signIn, getUserProfile };
