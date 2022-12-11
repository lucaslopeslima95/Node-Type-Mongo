import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


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
        type:String ,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

User.pre('save', async function(_next) {
    const hash = await bcrypt.hash(this.password,12);
    this.password = hash;
    _next();
});

export default mongoose.model("User",User);

