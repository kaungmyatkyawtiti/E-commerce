import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/usersController.ts";

const router = Router();

// /api/users
router.get("/", getAllUsers);

// /api/users/10
router.get("/:id", getUserById);

export default router;
