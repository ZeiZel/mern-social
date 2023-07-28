import express from 'express';
import { getAllPosts, createPost } from '../controllers/posts';

// роутер для постов
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);

export default router;
