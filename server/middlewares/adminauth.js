import jwt from "jsonwebtoken";

export const verifyadmintoken = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    console.log("reached");

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedtoken) => {
        if (err) {
          res.status(401).json({ status: false, msg: "jwt token expired" });
        } else {
          req.admin = decodedtoken.id;
          next();
        }
      });
    } else {
      res.status(401).json({ status: false, msg: "jwt token missing" });
    }
  } catch (error) {
    res.status(500).json({ status: false, msg: error.message });
  }
};