import express from "express";
import { createUser, getUsers, getUserById } from "./user.controller";
const router = express.Router();

// Root API
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser);

export default router;