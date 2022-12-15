import express, { Request, Response, NextFunction } from "express";
import {
    createLicense, getLicenses, placeHolder
 } from "../controllers/License";
 
const router = express.Router();

router.get("/", placeHolder);

router.get("/licenses", getLicenses)

router.post("/licenses", createLicense);

export default router;