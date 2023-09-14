import mongoose from "mongoose";
const adminschema = new mongoose.Schema({
     username:{
        type:String,
         require:true
     },
    
   
     pass:{
        type:String,
        require:true
     },
    
},
{ timestamps: true })
const adminmodel = mongoose.model("admin",adminschema)
export default adminmodel;