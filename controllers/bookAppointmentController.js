

import { appointmentModel } from "../models/appointmentModel.js"


export async function bookAppointment(req,res) { 
    try{
    const userId = req.user.id 
     const {technicianId} = req.body 
     const appointment = await appointmentModel.create({technicianId,userId})
     return res.status(201).json({message:"Appointment booked sucessfully..."},appointment)
    }

    catch(e) {
        res.status(400).json({message:e})
    }
     
}


export async function getAppointments(req,res){
     try{
       const userId=req.user.id;
       console.log(userId)
       const data= await appointmentModel.find({userId}).populate("technicianId", "name profession experience image")
       console.log(data)
       res.status(200).json(data)
     }catch(error){
        res.status(400).json({message:error})
     }
}


export async function deleteAppointments(req,res){
  try{
     const appointmentId = req.params.appointmentId;
     console.log(appointmentId);
     const appointment=await appointmentModel.findOneAndDelete({technicianId:appointmentId});
     res.status(201).json({
      deleteAppointment:appointment
     })
  }
  catch(error){
    res.status(400).json({
      message:error
    })
  }
     

}