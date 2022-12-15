import { Request, Response } from "express";
import { License, User, Feature, Product } from "../models/index"

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
        })

        const owner = await User.create({
                    email: req.body.owner.email,
                    displayName: req.body.owner.displayName,
        })

        const feature = await Feature.create({
            quantity: req.body.feature.quantity,
            productId: req.body.feature.productId
        })

        const product = await Product.create({
            productId: req.body.product.productId
        })

        const createdBy = await User.create({
            email: req.body.owner.email,
            displayName: req.body.owner.displayName,
        })      

        await owner.addLicense(license)
        await license.setFeatures(feature)
        await license.setProduct(product)
        await license.setCREATED_BY(createdBy)

        res.send(license);
    } catch (err) {
        console.log(err);
    }
}

export const getLicenses = async (req: Request, res: Response) => {
    try {
        const licenses = await License.findAll({
            include: {all: true}
        });
        res.send(licenses);
    } catch (err) {
        res.send(err);
    }
}