import express from "express";
import { complainCreate, complainList } from "../controllers/complain.js";

const router = express.Router();

router.post('/ComplainCreate', complainCreate);

router.get('/ComplainList/:id', complainList);

export default router;