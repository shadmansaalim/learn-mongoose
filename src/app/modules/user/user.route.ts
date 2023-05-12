import express from "express";
import { createUser, getUsers, getUserById, getAdminUsers } from "./user.controller";
const router = express.Router();

/*
    /
    /admins
    /:id dynamic

*/

// Root API
router.get('/', getUsers);

router.get('/admins', getAdminUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser);


export default router;