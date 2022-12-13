import express, { Request, Response, NextFunction } from "express";
import {
    createLicense, placeHolder
 } from "../controllers/License";
 
const router = express.Router();

router.get("/", placeHolder);

router.post('/licenses', createLicense);

export default router;