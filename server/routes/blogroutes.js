import express from "express";
import {
  createblog,
  getAllblog,
  getblogbyId,
} from "../controllers/blogcontrollers.js";
import { verifyadmintoken } from "../middlewares/adminauth.js";
const router = express.Router();
router.post("/createblog", verifyadmintoken, createblog);
router.get("/getallblog", getAllblog);
router.get("/getspecficblog/:id", getblogbyId);
export default router;
