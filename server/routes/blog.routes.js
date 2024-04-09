import express from 'express';

import { createBlog } from '../controllers/blog.controller.js';

const router = express.Router();

router.route('/').post(createBlog);

export default router;