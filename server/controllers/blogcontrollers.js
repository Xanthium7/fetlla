import blogmodel from "../models/blogmodels.js";
import cloudstorage from "../services/cloudinary.js";
const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

export const createblog = async (req, res) => {
  try {
    const { blogimage, values, content } = req.body;
    const imageurl = await cloudstorage.uploader.upload(blogimage, opts);
    const newblog = new blogmodel({
      title: values.title,
      authname: values.authname,
      content,
      img: imageurl.secure_url,
    });
    await newblog.save();
    res.status(200).json({status:true,msg:'blog uploaded'})
  } catch (error) {
    console.log(error);
  }
};
export const getAllblog = async (req,res)=>{
    try {
        const allblogs = await blogmodel.find().sort({updatedAt:-1})
        res.status(200).json({status:true,blog:allblogs})
        
    } catch (error) {
        console.log(error)
        
    }
}
export const getblogbyId = async(req,res)=>{
  try {
    const blog = await blogmodel.findById(req.params.id)
    res.status(200).json({status:true,blog})
  } catch (error) {
    
  }
}