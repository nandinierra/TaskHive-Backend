
import mongoose from "mongoose"; 


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/doicvqkvb/image/upload/v1757579385/oyblk49lovvrknllxxpj.png"},
    address:{
        type:Object, 
        
    },
    gender:{
        type:String,
        default:"Not Selected"
    },
    dob:{
        type:String,
        default:"Not Selected"
    },
    phone:{
        type:String,
        default:"xxxxxxxxxx"
    }
   
}) 

const userModel=mongoose.models.user ||  mongoose.model("user", userSchema);
export default userModel

