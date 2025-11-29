import express from 'express';
import { createUser, getUsers, getUserById, updateAvatar } from '../controllers/user.controller.js';
import { checkUploadSize } from '../utils/middlewares/checkUploadSize.js';
import { dynamicMulter } from '../utils/middlewares/dynamicMulter.js';
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post(
    '/avatar/:id',
    checkUploadSize,
    (req, res, next) => dynamicMulter(req.maxUploadSize).single("avatar")(req, res, next),
    updateAvatar
);

export default router;
