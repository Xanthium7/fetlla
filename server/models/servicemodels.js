import mongoose from "mongoose";
const Serviceschema = new mongoose.Schema({
  images :{
    type : String,
    require: true
  },
  title:{
    type : String,
    require : true
  },
  message:{
    type : String,
    require : true
  }
    
},
{ timestamps: true })
const servicemodel = mongoose.model("services",Serviceschema
)
export default servicemodel;