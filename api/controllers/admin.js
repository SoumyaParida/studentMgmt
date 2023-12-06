import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import Sclass from '../models/Sclass.js';
import Student from '../models/Student.js';
import Teacher from '../models/Teacher.js';
import Subject from '../models/Subject.js';
import Notice from '../models/Notice.js';
import Complain from '../models/Complain.js';
import jwt from "jsonwebtoken";

/*export const adminRegister = async (req, res) => {
    try {
        const admin = new Admin({
            ...req.body
        });

        console.log(admin)
        const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

        if (existingAdminByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if (existingSchool) {
            res.send({ message: 'School name already exists' });
        }
        else {
            let result = await admin.save();
            result.password = undefined;
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};*/


export const register = async (req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Admin({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.status(200).send("User has been Created.")

    }catch(err){
        next(err);
    }
}

export const adminRegister = async (req, res) => {
    try {
        const admin = new Admin({
            ...req.body
        });

        const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

        if (existingAdminByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if (existingSchool) {
            res.send({ message: 'School name already exists' });
        }
        else {
            let result = await admin.save();
            result.password = undefined;
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const login = async (req,res,next)=>{
    try{
        const user = await Admin.findOne({username:req.body.username})
        if(!user) return next(createError(404, "User not Found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or Username"));

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token,{
            httpOnly:true,
        }).status(200).json({ ...otherDetails })

    }catch(err){
        next(err);
    }
}

export const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined;
            res.send(admin);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}