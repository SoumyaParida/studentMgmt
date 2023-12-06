import express from "express";
import { noticeCreate, noticeList, deleteNotices, deleteNotice, updateNotice } from "../controllers/notice.js";


const router = express.Router();

router.post('/NoticeCreate', noticeCreate);

router.get('/NoticeList/:id', noticeList);

router.delete("/Notices/:id", deleteNotices)
router.delete("/Notice/:id", deleteNotice)

router.put("/Notice/:id", updateNotice)

export default router;