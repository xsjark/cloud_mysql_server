import { Request, Response } from "express";
import { License, User, Feature, Product, Tax } from "../models/index"
import TotalAmount from "../models/TotalAmount";

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
            email: req.body.createdBy.email,
            displayName: req.body.createdBy.displayName,
        })    

        const total_amount = await TotalAmount.create({
            price: req.body.total_amount.price,
            currency: req.body.total_amount.currency,
            net_price: req.body.total_amount.net_price,
            owed: req.body.total_amount.owed,
            dueDate: req.body.total_amount.dueDate,
        })  

        const tax = await Tax.create({
            name: req.body.total_amount.tax.name,
            basis: req.body.total_amount.tax.basis,
            value: req.body.total_amount.tax.value,
            currency: req.body.total_amount.tax.currency,
        })

        await owner.addLicense(license)
        await license.setFeatures(feature)
        await license.setProduct(product)
        await license.setCREATED_BY(createdBy)

        await total_amount.setTax(tax)
        await license.setTotalamount(total_amount)
        



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
                    model: User
                },
                {
                    model: Feature
                },
                {
                    model: User,
                    as: "CREATED_BY"
                },
                {
                    model: Product
                },
                {
                    model: TotalAmount,
                    include: [Tax]
                },
            ]
        });
        res.send(licenses);
    } catch (err) {
        res.send(err);
    }
}