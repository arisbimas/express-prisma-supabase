import express from 'express';
import { createUser, getUsers, getUserById, updateAvatar } from '../controllers/user.controller.js';
import { upload } from '../utils/middlewares/upload.js';
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/avatar/:id', upload.single('avatar'), updateAvatar);

export default router;
