import express from 'express';

import { createBlog, getAllBlogs, updateBlog, deleteBlog, getLoginUserBlogs } from '../controllers/blog.controller.js';
import { verifyJWT } from '../middlewares/verifyJwt.js';

const router = express.Router();


router.route('/hello').get(verifyJWT ,getLoginUserBlogs);

router.route('/').post(createBlog);
router.route('/').get(getAllBlogs);
router.route('/:id').patch(updateBlog);
router.route('/:id').delete(deleteBlog);

export default router;