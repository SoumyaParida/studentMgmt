import express from "express";
import { teacherRegister, teacherLogIn, 
	     getTeachers, getTeacherDetail,
	     deleteTeachers, deleteTeachersByClass, deleteTeacher,
	     updateTeacherSubject, teacherAttendance
	   } from "../controllers/teacher.js";

const router = express.Router();

router.post('/TeacherReg', teacherRegister);
router.post('/TeacherLogin', teacherLogIn)

router.get("/Teachers/:id", getTeachers)
router.get("/Teacher/:id", getTeacherDetail)

router.delete("/Teachers/:id", deleteTeachers)
router.delete("/TeachersClass/:id", deleteTeachersByClass)
router.delete("/Teacher/:id", deleteTeacher)

router.put("/TeacherSubject", updateTeacherSubject)

router.post('/TeacherAttendance/:id', teacherAttendance)

export default router;