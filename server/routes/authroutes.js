import expres from "express";
import axio from "axios";
import { adminauth } from "../controllers/Authcontrollers.js";
import upload from "../services/multerconfig.js";
import { sendMail } from "../controllers/mailcontroller.js";
const router = expres.Router();

router.post("/adminlogin",adminauth )
router.post("/sendmail",sendMail)
export default router;
