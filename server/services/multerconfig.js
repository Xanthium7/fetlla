import multer from "multer";

import {CloudinaryStorage} from 'multer-storage-cloudinary'
import cloudstorage from "./cloudinary.js";



// Set up the Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudstorage,
  params: {
    folder: "uploads", // Folder name in your Cloudinary account where files will be stored
    allowed_formats: ["jpg", "png", "jpeg"], // Specify the allowed file formats
  },
});

const upload = multer({ storage: storage });


export default upload;
