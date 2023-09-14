import reviewmodel from "../models/reviewmodels.js";
import cloudstorage from "../services/cloudinary.js";
const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

export const createReviews = async (req, res) => {
  try {
    const { imgconvert } = req.body;

    const imageurl = await cloudstorage.uploader.upload(imgconvert, opts);
    console.log(imageurl);
    const newimage = new reviewmodel({
      images: imageurl.secure_url,
    });
    await newimage.save();
    const allimage = await reviewmodel.find();
    res.status(200).json({ status: true, message: "review uploaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "failed" });
  }
};
export const getallReviews = async (req, res) => {
  try {
    const allimage = await reviewmodel.find().sort({updatedAt:-1}).limit(4);
    res.status(200).json({ status: true, data: allimage });
  } catch (error) {
    res.status(500).json({ status: false, message: "failed" });
  }
};
