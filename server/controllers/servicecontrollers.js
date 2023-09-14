import servicemodel from "../models/servicemodels.js";
import cloudstorage from "../services/cloudinary.js";
const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
  };

export const createServices = async (req,res)=>{
    try {
        console.log(req.body)
        const {imgconvert,title,message} = req.body
       
        const imageurl = await cloudstorage.uploader.upload(imgconvert, opts);
        const newimage = new servicemodel({
            images : imageurl.secure_url,
            title,
            message
        })
        await newimage.save()
        const allimage = await servicemodel.find()
        console.log(allimage)
        res.status(200).json({status:true,message:'new service added'})
       
    

    } catch (error) {
        console.log(error)
        res.status(500).json({status:false,message:'failed'})
        
    }
}
export const getallservices = async (req,res)=>{
    try {
        const allservices = await servicemodel.find()
        res.status(200).json({status:true,allservices})
        
    } catch (er){
        res.status(500).json({status:false,msg:"failed"})

    }
}