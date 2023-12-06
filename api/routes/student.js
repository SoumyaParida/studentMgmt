import express from "express";
import { studentRegister, studentLogIn, getStudents, getStudentDetail, deleteStudents, deleteStudentsByClass,
		 deleteStudent, updateStudent, updateExamResult, studentAttendance, 
		 clearAllStudentsAttendanceBySubject, clearAllStudentsAttendance,
		 removeStudentAttendanceBySubject, removeStudentAttendance
	   } from "../controllers/student.js";

const router = express.Router();

router.post('/StudentReg', studentRegister);
router.post('/StudentLogin', studentLogIn)

router.get("/Students/:id", getStudents)
router.get("/Student/:id", getStudentDetail)

router.delete("/Students/:id", deleteStudents)
router.delete("/StudentsClass/:id", deleteStudentsByClass)
router.delete("/Student/:id", deleteStudent)

router.put("/Student/:id", updateStudent)

router.put('/UpdateExamResult/:id', updateExamResult)

router.put('/StudentAttendance/:id', studentAttendance)

router.put('/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
router.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);

router.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
router.put('/RemoveStudentAtten/:id', removeStudentAttendance)

export default router;