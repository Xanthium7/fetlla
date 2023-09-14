import mongoose from "mongoose";
const blogschema = new mongoose.Schema({
     title:{
        type:String,
         require:true
     },
     authname:{
        type:String,
        require:true
     },
     content:{
        type:String,
        require:true
     },
     img : {
      type : String
     }
},
{ timestamps: true })
const blogmodel = mongoose.model("blog",blogschema)
export default blogmodel;