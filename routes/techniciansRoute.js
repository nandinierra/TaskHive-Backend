import express from "express";
import {techniciansList} from "../controllers/technicianController.js";

const technicianRouter=express.Router() 

technicianRouter.get('/list', techniciansList) 

export default technicianRouter