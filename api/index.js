import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import adminRoute from "./routes/admin.js";
import studentRoute from "./routes/student.js";
import teacherRoute from "./routes/teacher.js";
import sclassRoute from "./routes/sclass.js";
import subjectRoute from "./routes/subject.js";
import noticeRoute from "./routes/notice.js";
import complainRoute from "./routes/complain.js";

import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to mongoDB!")
	}catch(error) {
		throw error;
	}
};

mongoose.connection.on("connected",() => {
	console.log("Mongodb Connected !")
})

mongoose.connection.on("disconnected",() => {
	console.log("Mongodb disConnected !")
})

//middlewares
app.use(cookieParser());
app.use(express.json())

app.use("/admin", adminRoute);
app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);
app.use("/sclass", sclassRoute);
app.use("/subject", subjectRoute);
app.use("/notice", noticeRoute);
app.use("/complain", complainRoute);

app.use((err,req,res, next)=>{
	const errorStatus = err.status || 500
	const errorMessage = err.message || "Something went wrong!"
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(8800,()=>{
	connect()
	console.log("Connected to backend!")
})