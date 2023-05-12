import express from "express";
import { createUser } from "./user.controller";
const router = express.Router();

// Root API
router.get('/', createUser);

export default router;