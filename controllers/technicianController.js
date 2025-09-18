
import technicianModel from "../models/technicianModel.js";


export const changeAvailability=async (req,res)=>{
    try{
       
       const {technicianId}=req.body;
       const techData=await technicianModel.findById(technicianId);
       await technicianModel.findByIdAndUpdate(technicianId, {available:!techData.available})
       res.json({success:true, message:'Availability Changed'})
    }catch(error){
            console.log(error);
            res.json({success:false, message:error.message})
    }
}

export const techniciansList= async (req, res)=>{
   try{
      const technicians = await technicianModel.find({}).select(['-password', '-email'])
      res.json({
        success:true,
        technicians
      })
   }
   catch(error){
      console.log(error);
      res.json({success:false, message:error.message})
   }
}