import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authrouter from "./routes/authroutes.js";
import blogrouter from "./routes/blogroutes.js";
import servicerouter from "./routes/serviceroutes.js";
import reviewrouter from './routes/reviewroutes.js'

//config .env variables
dotenv.config();

// initialising express
const app = express();

//sever port
const port = process.env.PORT;

//middleware to parse input data
app.use(express.json({limit:'10mb'}));

//middleware to log http request
app.use(morgan("common"));

//to get browser cookie in req
app.use(cookie());

//to enable cors
// in localhost
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
//app.use(cors({credentials:true,origin:"http://35.154.223.195"}))

app.use("/api/auth", authrouter);
app.use("/api/blog", blogrouter);
app.use("/api/services",servicerouter);
app.use("/api/review",reviewrouter);

mongoose
  .connect(process.env.MONGO_URL, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is starting @${port}`);
    });
  })
  .catch((er) => {
    console.log(er);
  });
