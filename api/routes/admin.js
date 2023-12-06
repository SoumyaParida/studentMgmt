import express from "express";
import { register, login, adminRegister, getAdminDetail } from "../controllers/admin.js";


const router = express.Router();

router.post('/register', adminRegister);
router.post('/login', login);
router.get("/:id", getAdminDetail)

export default router;