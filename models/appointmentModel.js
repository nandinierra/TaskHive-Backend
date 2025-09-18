import mongoose from "mongoose";


const appointmentSchema= new mongoose.Schema({
     technicianId:{
        ref:"technician",
        type:mongoose.Schema.Types.ObjectId,
        required:true
     },
     userId : {
        ref:"user",
        type:mongoose.Schema.Types.ObjectId,
        required:true
     }
}) 

export const appointmentModel= mongoose.model('Appointment', appointmentSchema);

