import express from "express";
import { verifyadmintoken } from "../middlewares/adminauth.js";
import { createReviews, getallReviews } from "../controllers/reviewcontroller.js";

const router = express.Router();
router.post("/createnewreview", verifyadmintoken, createReviews);
router.get("/getreview",getallReviews);

export default router;