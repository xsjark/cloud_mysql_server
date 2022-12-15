import { Request, Response } from "express";
import { License, Owner, Feature } from "../models/index"

export const placeHolder = async (req: Request, res: Response) => {
    res.status(200).send(200);
}

export const createLicense = async (req: Request, res: Response) => {
    try {
        const license = await License.create({
            city: req.body.city,
            country: req.body.country,
            region: req.body.region,
            productId: req.body.productId
        }).then((license) => {
            Owner.create({
                email: req.body.owner.email,
                displayName: req.body.owner.displayName,
            }).then(async(owner) => {
                license.setOwner(owner)
            })
            Feature.create({
                quantity: req.body.feature.quantity,
                productId: req.body.feature.productId
            }).then(async(feature) => {
                license.setFeatures(feature)
            })
        })
        res.send(license);
    } catch (err) {
        console.log(err);
    }
}

export const getLicenses = async (req: Request, res: Response) => {
    try {
        const licenses = await License.findAll({
            include: [
                {
                    model: Owner
                },
                {
                    model: Feature
                }
            ]
        });
        res.send(licenses);
    } catch (err) {
        res.send(err);
    }
}