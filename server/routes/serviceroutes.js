import express from "express";
import { verifyadmintoken } from "../middlewares/adminauth.js";
import { createServices, getallservices } from "../controllers/servicecontrollers.js";
const router = express.Router();
router.post("/createnewservices", verifyadmintoken, createServices);
router.get("/getallservices",getallservices);

export default router;