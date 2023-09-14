import cloudinary from 'cloudinary'
import dotenv from 'dotenv'

const cloudstorage = cloudinary.v2
dotenv.config()

// Configuration 
cloudstorage.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.API_SECRET
  });

  export default cloudstorage;