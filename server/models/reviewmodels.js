import mongoose from "mongoose";
const Reviewschema = new mongoose.Schema({
  images :{
    type : String,
    require: true
  }
    
},
{ timestamps: true })
const reviewmodel = mongoose.model("Review",Reviewschema
)
export default reviewmodel;