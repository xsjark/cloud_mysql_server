import { Request, Response } from "express";
import { License, Owner } from "../models/associations";


export const placeHolder = async (req: Request, res: Response) => {
    res.status(200).send(200);
}

export const createLicense = async (req: Request, res: Response) => {
    try {
        const license = await License.create({
            city: req.body.city
        }).then((license) => {
            Owner.create({
                email: req.body.owner.email,
                displayName: req.body.owner.displayName
            }).then((owner) => {
                license.setOwner(owner)
            })
        })
        res.send(license);
    } catch (err) {
        console.log(err);
    }
    // try {
    //     const license = await License.create({
    //         city: req.body.city,
    //         owner: await Owner.create({
    //             email: req.body.owner.email,
    //             displayName: req.body.owner.displayName
    //         })
    //     })
    //     res.send(license);
    // } catch (err) {
    //     console.log(err);
    // }
}

export const getLicenses = async (req: Request, res: Response) => {
    try {
        const licenses = await License.findAll({
            include: Owner
        });
        res.send(licenses);
    } catch (err) {
        res.send(err);
    }
}