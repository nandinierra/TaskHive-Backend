
import express from "express";
import {techniciansList} from "../controllers/technicianController.js";
import { authAdmin } from "../middlesware/authAdmin.js";
import { bookAppointment, getAppointments, deleteAppointments} from "../controllers/bookAppointmentController.js";

const technicianRouter=express.Router() 

technicianRouter.get('/list', techniciansList) 
technicianRouter.post('/book-appointment',authAdmin, bookAppointment) 
technicianRouter.get('/get-appointment',authAdmin, getAppointments) 
technicianRouter.delete('/delete-appointment/:appointmentId', authAdmin , deleteAppointments)



export default technicianRouter