import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import blogRoutes from "./routes/blog.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public"));

app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/auth", userRoutes);

export default app;
