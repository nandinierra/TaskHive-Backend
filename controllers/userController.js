import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/usermodel.js"

export const registerUser=async (req, res)=>{
   try{
     
   
    const {name, email, password}=req.body;
     const exists=await userModel.findOne({email});
    if(!name||!password||!email){
        return res.json({
            success:false, message:"Missing Details"
        })
    }
    if(!validator.isEmail(email)){
            return res.json({
            success:false, message:"Enter valid Email"
        })
    
    }
    if(password.length<8){
        return res.json({
            success:false,
            message:"Enter a string password"
        })
    }
    if(exists){
        return res.json({success:false,message:'User Already Exists'})
    }
     const salt=await bcrypt.genSalt(10);
     const hashedpassword=await bcrypt.hash(password, salt)
     const userData={
        name,
        email,
        password:hashedpassword
     }

    const newUser = new userModel(userData)
    const user=await newUser.save()
     const token=jwt.sign({
        id:user._id
     }, process.env.JWT_SECRET)

     res.json({success:true, token})
   }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export const loginUser=async (req,res)=>{
    try{
       const {email, password} =req.body;
       const user=await userModel.findOne({email})
       if(!user){
            return res.json({success:false,message:'user deos not exist'})
        } 
            const isMatch=await bcrypt.compare(password, user.password)
            if(isMatch){
            const token=jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
           }else{
            res.json({success:false, message:'Invalid credentials'})
           }
           
       
    }catch(error){
        console.log(error);
        res.json({
            success:false,messagE:error.message
        })
    }
}