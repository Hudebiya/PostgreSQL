import express from 'express';
import { getAllUsers,createUser,updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser)

export default router;