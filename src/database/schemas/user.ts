import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});
export default mongoose.model("User",User);