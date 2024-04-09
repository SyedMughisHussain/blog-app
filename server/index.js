import express from "express";
import dotenv from "dotenv";

import blogRoutes from "./routes/blog.routes.js";


dotenv.config({
    path: "./.env",
  });

const app = express();
app.use(express.json());


app.use("/api/v1/blog", blogRoutes);

export default app;
