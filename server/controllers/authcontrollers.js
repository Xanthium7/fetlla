import axios from "axios";
import jwt from "jsonwebtoken";
import adminmodel from "../models/adminmodels.js";

// create token
const maxage = 3 * 24 * 60 * 60;
const CreateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxage,
  });
};

export const adminauth = async (req, res) => {
  try {
    console.log(req.body);
    const { username, pass, token } = req.body;
    console.log(username, pass);
    const googleverify = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCH_SEC}&response=${token}`;
    const response = await axios.post(googleverify);
    console.log(response);
    if (response.data.success) {
      const userfind = await adminmodel.find({ username: username });

      if (!userfind.length || !userfind.pass === pass) {
        res
          .status(400)
          .json({ status: false, msg: "username or password is invalid" });
      } else {
        const token = CreateToken(userfind._id);
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxage: maxage * 1000,
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 ),
        });
        res.status(200).json({ status: true, msg: "auth sucess" ,token});
      }
    } else {
      res.status(400).json({ status: false, msg: "token expired" });
    }
  } catch (error) {
    res.status(400).json({ status: false, msg: "auth failed" });
  }
};
