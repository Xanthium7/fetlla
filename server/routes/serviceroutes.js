import express from "express";
import { verifyadmintoken } from "../middlewares/adminauth.js";
import { createServices, delserviceId, getallservices } from "../controllers/servicecontrollers.js";
const router = express.Router();
router.post("/createnewservices", verifyadmintoken, createServices);
router.get("/getallservices",getallservices);
router.delete('/delservice',delserviceId)

export default router;