import express from "express";
import { verifyadmintoken } from "../middlewares/adminauth.js";
import { createReviews, delreviewbyId, getallReviews } from "../controllers/reviewcontroller.js";

const router = express.Router();
router.post("/createnewreview", verifyadmintoken, createReviews);
router.get("/getreview",getallReviews);
router.delete("/delreview",delreviewbyId)

export default router;