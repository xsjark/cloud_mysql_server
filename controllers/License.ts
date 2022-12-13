import { Request, Response } from "express";
import License from "../models/License";


export const placeHolder = async(req: Request, res: Response) => {
    res.status(200).send(200);
}

export const createLicense = async (req: Request, res: Response) => {
    try {
        await License.create(req.body);
        res.json({
            "message": "License Created"
        });
    } catch (err) {
        console.log(err);
    }
}