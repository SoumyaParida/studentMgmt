import express from "express";
import { sclassCreate, sclassList, getSclassDetail, getSclassStudents, deleteSclasses, deleteSclass } from "../controllers/sclass.js";

const router = express.Router();

router.post('/SclassCreate', sclassCreate);

router.get('/SclassList/:id', sclassList);
router.get("/Sclass/:id", getSclassDetail)

router.get("/Sclass/Students/:id", getSclassStudents)

router.delete("/Sclasses/:id", deleteSclasses)
router.delete("/Sclass/:id", deleteSclass)

export default router;